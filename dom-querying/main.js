var stepOne = document.querySelector('h1');
console.log('query of h1:', stepOne);
console.dir(stepOne);

var stepTwo = document.querySelector('#explanation');
console.log('query of explanation:', stepTwo);
console.dir(stepTwo);

var stepThree = document.querySelector('.hint');
console.log('query of hint:', stepThree);
console.dir(stepThree);

var stepFour = document.querySelectorAll('p');
console.log('query of p:', stepFour);

var stepFive = document.querySelectorAll('.example-link');
console.log('query of example-link:', stepFive);
