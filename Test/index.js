// <<<<<<< HEAD
// const user = {theName:"Osama", theAge: 39, theTitle: "Developer", theCountry: "Egypt"};

// ({theName, theAge, theTitle, theCountry} = user);

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);
// =======
// /*
//   Destructuring
//   - Destructuring Object
// */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// // console.log(user.theName);
// // console.log(user.theAge);
// // console.log(user.theTitle);
// // console.log(user.theCountry);

// // let theName = user.theName;
// // let theAge = user.theAge;
// // let theTitle = user.theTitle;
// // let theCountry = user.theCountry;

// // console.log(theName);
// // console.log(theAge);
// // console.log(theTitle);
// // console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
// // const { theName, theAge, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);
// >>>>>>> a6641697e737850716f4679b9c7e53acaec2af3e


let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "number",
  "10": "String"
}

console.log(myNewObject);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10","String");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("#######");

console.log(myNewObject);
console.log(myNewMap);