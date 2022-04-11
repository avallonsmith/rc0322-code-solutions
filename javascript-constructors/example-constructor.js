function ExampleConstructor() {
}
console.log('value of exampleConstructor:', ExampleConstructor.prototype);
console.log('value of typeof exampleConstructor:', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor:', newExampleConstructor);

var exampleInstance = newExampleConstructor instanceof ExampleConstructor;
console.log('value of exampleInstance:', exampleInstance);
