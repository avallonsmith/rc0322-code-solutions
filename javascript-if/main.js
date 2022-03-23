/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  var numUnderFive = number < 5;
  return numUnderFive;
}

function isEven(number) {
  var numIsEven = ((number % 2) === 0);
  return numIsEven;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  var drinkingAge = person >= 21;
  return drinkingAge;
}

function isOldEnoughToDrive(person) {
  var drivingAge = person >= 16;
  return drivingAge;
}

function isOldEnoughToDrinkAndDrive(person) {
  var drinkAndDrive = person === false;
  return drinkAndDrive;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    pH = 'Neutral';
  } else if ((pH >= 0) && (pH < 7)) {
    pH = 'Acid';
  } else if ((pH <= 14) && (pH > 7)) {
    pH = 'Base';
  } else {
    pH = 'Invalid pH Level';
  }
  return pH;
}

function introduceWarnerBro(name) {
  if (name === 'dot') {
    name = 'I\'m cute~';
  } else if (name === 'yakko') {
    name = 'We\'re the warner brothers!';
  } else if (name === 'wakko') {
    name = 'We\'re the warner brothers!';
  } else {
    name = 'Goodnight everybody!';
  }
  return name;
}
