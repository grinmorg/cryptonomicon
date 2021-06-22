const API_KEY =
  "c2c82f91d0a3910d90c9c85a8c8b2e2c416dc3bc0f20b7423772d6e6f1053599";

  const tickersHandlers = new Map(); // {}
  const socket = new WebSocket(
    `wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`
  );
  
  const AGGREGATE_INDEX = "5";
  
  socket.addEventListener("message", e => {
    const { TYPE: type, FROMSYMBOL: currency, PRICE: newPrice } = JSON.parse(
      e.data
    );
    if (type !== AGGREGATE_INDEX || newPrice === undefined) {
      return;
    }
  
    const handlers = tickersHandlers.get(currency) ?? [];
    handlers.forEach(fn => fn(newPrice));
  });
  
  function sendToWebSocket(message) {
    const stringifiedMessage = JSON.stringify(message);
  
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(stringifiedMessage);
      return;
    }
  
    socket.addEventListener(
      "open",
      () => {
        socket.send(stringifiedMessage);
      },
      { once: true }
    );
  }
  
  function subscribeToTickerOnWs(ticker) {
    sendToWebSocket({
      action: "SubAdd",
      subs: [`5~CCCAGG~${ticker}~USD`]
    });
  }
  
  function unsubscribeFromTickerOnWs(ticker) {
    sendToWebSocket({
      action: "SubRemove",
      subs: [`5~CCCAGG~${ticker}~USD`]
    });
  }
  
  export const subscribeToTicker = (ticker, cb) => {
    const subscribers = tickersHandlers.get(ticker) || [];
    tickersHandlers.set(ticker, [...subscribers, cb]);
    subscribeToTickerOnWs(ticker);
  };
  
  export const unsubscribeFromTicker = ticker => {
    tickersHandlers.delete(ticker);
    unsubscribeFromTickerOnWs(ticker);
  };

  
  window.tickers = tickersHandlers;
