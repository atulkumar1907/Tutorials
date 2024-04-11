//STRINGS

let str1 = 'string one';
let str2 = "string two";
let str3 = `here's string three`;

let add = str1 +' '+ str2;
let add2 = `${str1} ${str2}`
console.log(str1)
console.log(str2)
console.log(add2)

//string methods
console.log(str1.length)
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.charAt(3))
console.log(str1.concat(str2))
console.log(str1.includes('one'))
console.log(str1.indexOf('t'))
console.log(str1.endsWith('a'))
console.log(str1.startsWith('s'))
console.log(str3.lastIndexOf('e'))
console.log(str3.substring(1))
console.log(str3.slice(0,5))
console.log(str3.replace('string',''))
console.log(str3.trimStart())
console.log(str1.trim())
console.log(str1.trimEnd())