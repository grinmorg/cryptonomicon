const API_KEY = 'c2c82f91d0a3910d90c9c85a8c8b2e2c416dc3bc0f20b7423772d6e6f1053599'

export const loadTicker = (tickerName) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`
  ).then(r => r.json());
