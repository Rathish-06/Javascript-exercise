// Calling the sayHello function three times

var sayHello;

sayHello = function () {
	console.log("Hello World!");
};

// Calling the sayHello function three times
sayHello();
sayHello();
sayHello();

// New function to print letters of "Hello World!" one by one down the page
var printLetters;

printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

// Calling the printLetters function
printLetters();

/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */