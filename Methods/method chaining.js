//method chaining => calling one method after another
//                in one continues line of code.

let username = window.prompt("Enter your username: ")

// ---------No method chaining ---------
username = username.trim()
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChar = username.slice(1)
extraChar = extraChar.toLowerCase()
username = letter + extraChar;

console.log(username)
// -----------method chaining -----------
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase()


