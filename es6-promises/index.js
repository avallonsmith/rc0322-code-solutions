const takeAChance = require('./take-a-chance');

const chanceName = takeAChance('Avallon');
chanceName.then(value => {
  console.log(value);
});
chanceName.catch(value => {
  console.log(value.message);
});
