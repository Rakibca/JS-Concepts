export function getStockData() {
  return {
    name: 'QtechAI',
    sym: 'QTA',
    price: (Math.random() * 3).toFixed(2),
    time: new Date().toLocaleTimeString(),
  };
}

// price returns a random number between 0 and 3 to two decimal places
// time returns a timestamp in this format: hh/mm/ss
