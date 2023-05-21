let myDiv = document.querySelector("div");

let counter = myDiv.innerHTML;

let myInterval = setInterval(function () {
    counter-=1;
    myDiv.innerHTML = counter;
    console.log(counter);
    if (counter === 0) {
        clearInterval(myInterval);
        window.open("https://elzero.org","popup","width=200, height = 200");
    }
},1000);
