let myDiv = document.querySelector("div");

let counter = myDiv.innerHTML;

let myInterval = setInterval(function () {
    counter-=1;
    myDiv.innerHTML = counter;
    if (counter === 0) {
        clearInterval(myInterval);
    }
    console.log(counter);
},1000);
