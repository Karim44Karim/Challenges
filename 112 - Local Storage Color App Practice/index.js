let lis = document.querySelectorAll("ul li");

if (localStorage.getItem("color")) {
            // storing the stored color value
            let myCol = localStorage.getItem("color");
            // remove active class from all elements
            lis.forEach(li => {
                li.classList.remove("active");
            });
            // Change the color of the div
            let myDiv = document.querySelector(".experiment");
            myDiv.style.backgroundColor = localStorage.getItem("color");

            // add active class to the list element of the stored color
            document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList.add("active");
            // document.querySelector('[data-color="${localStorage.getItem("color")}"]').classList.add("active");
}


lis.forEach( (li) => {
    li.addEventListener("click", (e) =>{
        console.log(e.currentTarget.dataset.color)

        // remove active class from all elements
        lis.forEach(li => {
            li.classList.remove("active");
        });

        // add active calss to clicked item
        e.target.classList.add("active");
        
        // add the selected color to local memory
        localStorage.setItem("color",e.currentTarget.dataset.color)

        // Change the color of the div
        let myDiv = document.querySelector(".experiment");
        myDiv.style.backgroundColor = e.currentTarget.dataset.color;
        
    })
}); 



