let myDiv = document.querySelector("div");

let counter = myDiv.innerHTML;

let myInterval = setInterval(function () {
    counter-=1;
    myDiv.innerHTML = counter;
    console.log(counter);
    if (counter === 0) {
        clearInterval(myInterval);
        location.href = "https://elzero.org";

    }
    
},1000);
