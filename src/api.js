const API_KEY =
  "d704e80a17df9f3c01d205bccd4590c4808af57f2b4d16840b08a8505ceea86d";

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
      subs: [`5~CCCAGG~${ticker.toUpperCase()}~USD`]
    });
  }
  
  function unsubscribeFromTickerOnWs(ticker) {
    sendToWebSocket({
      action: "SubRemove",
      subs: [`5~CCCAGG~${ticker.toUpperCase()}~USD`]
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
