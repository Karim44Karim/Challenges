let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
const {
  title,
  age,
  available,
  skills: [fs, ls],
} = myFriends[chosen];

printData();
// If chosen === 1

("Osama");
39;
("Available");
("CSS");

// If chosen === 2

("Ahmed");
25;
("Not Available");
("Django");

// If chosen === 3

("Sayed");
33;
("Available");
("Laravel");

function printData() {
  console.log(title);
  console.log(age);
  available ? console.log("Available") : console.log("Not Available");
  console.log(ls);
}
