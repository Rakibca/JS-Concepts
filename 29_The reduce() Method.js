const rainJanuaryByWeek = [10, 20, 0, 122];

const totalRainfallJanuary = rainJanuaryByWeek.reduce(function (
  total,
  currentElement
) {
  console.log('total: ' + total, 'currentElement: ' + currentElement);
  return total + currentElement;
});

console.log(totalRainfallJanuary);
