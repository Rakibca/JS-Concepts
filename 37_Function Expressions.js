// This is a Function Declaration. They are hoisted
function getSpendAlert(amount) {
  return `Warning! You just spent £${amount}!`;
}
console.log(getSpendAlert(200));

// This is a Function Expression. They are not hoisted
const getSpendAlert2 = function (amount) {
  return `Warning! You just spent £${amount}!`;
};
console.log(getSpendAlert2(150));
