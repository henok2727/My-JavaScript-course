let email  = "mark@gmail.com"

username = email.slice(0, email.indexOf('@'));
console.log(username)

let extention = email.slice(email.indexOf('@') +1) ;
console.log(extention)