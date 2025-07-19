import { itemsBoughtArr } from '/itemsBoughtArr.js';

// 'discount' has a default value of 10
function calculateTotalCost(itemsBoughtArr, discount = 10) {
  const total = itemsBoughtArr.reduce(
    (total, currentItem) => total + currentItem.priceUSD,
    0
  );
  return total - discount;
}

console.log(calculateTotalCost(itemsBoughtArr, 20));
