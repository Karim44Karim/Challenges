function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

itsMee = () => "Iam an arrow Function";
console.log(itsMee());


// 2nd function


// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

const urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
