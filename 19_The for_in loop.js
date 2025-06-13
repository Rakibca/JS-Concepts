const character1 = {
  title: 'Ninja',
  emoji: '🥷',
  powers: ['agility', 'stealth', 'aggression'],
};

// for Objects we use for...in
for (let property in character1) {
  console.log(property);
}

for (let property in character1) {
  console.log(character1[property]);
}

// for Arrays and Strings we use for...of
const character = 'ninja';

for (let letter of character) {
  console.log(letter);
}
