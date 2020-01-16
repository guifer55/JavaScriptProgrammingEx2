let l = '~~~~~~~~~~~~~~~~~~';
console.log(l);

let firstName = 'Guilherme';
let lastName = "Ferreira";
let age = "37";

console.log(l);

//concatenation
let messageConcatenation = 'My name is' + " " + lastName + ' ans my age is ' + age + '.';
console.log(messageConcatenation);
console.log(l);

//string template/ template literal
let messageStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}`;
console.log(messageStringLiteral);
console.log(l);

//escape and New Line
let a = ' Add a new line\nThis is another line';
console.log(a);
console.log(l);

//
let b = 'Iquoted the person as saying "I love Javascript"';
console.log(b);
console.log(l);

console.log('String Functions');

let d = 'abcdefg';
//length of string
console.log(`Lenth of d - ${d.length}`);

//to upper

d = d.toUpperCase();
console.log(d);

//to lower
d = d.toLowerCase();
console.log(d);

//substr
let e = d.substr(2, 4);
console.log(e);

//substring
let f = d.substring(3);
console.log(f);

//indexOf
let index = d.indexOf('c');
console.log(index);


