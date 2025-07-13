// const getSpendAlert = function(amount){
//     return `Warning! You just spent £${amount}!`
// }

// Converted to Arrow Function
const getSpendAlert1 = (amount) => {
  return `Warning! You just spent £${amount}!`;
};
console.log(getSpendAlert1(150));

// With two Parameters
const getSpendAlert2 = (name, amount) => {
  return `Hey ${name}! You just spent £${amount}!`;
};
console.log(getSpendAlert2('Tom', 100));

// Concise Arrow Function
const getSpendAlert3 = (amount) => `You just spent £${amount}!`;
console.log(getSpendAlert3(100));

// With if Statement
const getSpendAlert4 = (amount) => {
  if (amount > 50) {
    return `Warning, Warning! You just spent £${amount}!`;
  }
};
console.log(getSpendAlert4(100));
