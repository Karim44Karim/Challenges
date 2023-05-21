let input = window.prompt("Print Number From – To");

let numbers = input.split("-");

numbers = numbers.sort();

let firstNo = parseInt(numbers[0]);
let lastNo = parseInt(numbers[numbers.length-1]);
let loops = lastNo - firstNo +1;

for (let index = 0; index < loops; index++) {
    console.log(`index = ${index}`);
    console.log(firstNo) ;
    firstNo++;
}   