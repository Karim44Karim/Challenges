// Create the header with it's style

let myDiv = document.createElement("div");
let logo = document.createElement("h2");
let logoText = document.createTextNode("Elzero");
let navigationList = document.createElement("ul");
let navigationListElements = ["Home","About","Service","Contact"];



document.body.appendChild(myDiv);
myDiv.style.display = "flex";
myDiv.style.alignItems = "center";

myDiv.appendChild(logo);
logo.style.display = "inline-block";
logo.appendChild(logoText);
logo.style.justifyContent = "space-between";
logo.style.width = "75%";
logo.style.color = "#8fd7b9";



myDiv.appendChild(navigationList);
navigationList.style.listStyle = "none";
navigationList.style.display = "inline-flex";
navigationList.style.justifyContent = "center";
// navigationList.style.float = "right";
navigationList.style.width = "25%";



for (let index = 0; index < navigationListElements.length; index++) {

    let listElement = document.createElement("li");
    let listElementText = document.createTextNode(navigationListElements[index]);
    listElement.appendChild(listElementText);
    navigationList.appendChild(listElement);
    listElement.style.width = "25%";
}


// create the products section

let productsNumeber = 15;
let productsSection = document.createElement("div");
document.body.appendChild(productsSection);

productsSection.width = "100%";
productsSection.style.display = "flex";
productsSection.style.flexWrap = "wrap";
productsSection.style.badding = "20px";
productsSection.style.justifyContent = "space-evenly";
productsSection.style.textAlign = "center";
productsSection.style.backgroundColor = "#ececec"
productsSection.style.height = "600px";




for (let index = 1; index < productsNumeber+1; index++) {
    let productDiv = document.createElement("div");
    let productText = document.createTextNode(index);
    let productTextDiv = document.createElement("h2");
    let productTextH = document.createElement("h6");
    let productTextNode = document.createTextNode("product");   

      
    productTextDiv.appendChild(productText);
    productDiv.appendChild(productTextDiv);
    productTextH.appendChild(productTextNode); 
    productDiv.appendChild(productTextH);   
    productsSection.appendChild(productDiv);


    productTextDiv.style.width = "100%";
    productTextDiv.style.marginBottom ="0";
    productTextH.style.marginTop = "0";
    productTextH.style.fontWeight = "lighter";
    productTextH.style.color = "silver";    

    productDiv.style.width = "calc(94%/3)";
    productDiv.style.backgroundColor = "white";
    // productDiv.style.marginLeft = "10px";
    // productDiv.style.marginRight = "10px";
    productDiv.style.marginTop = "5px";
    productDiv.style.marginBottom = "5px";
    productDiv.style.display = "flex";
    productDiv.style.flexWrap = "wrap";
    productDiv.style.flex = "flex-grow";    
    productDiv.style.justifyContent = "center";
    productDiv.style.textAlign = "center";
    productDiv.style.height = "calc(90%/5)";
    productDiv.style.boxSizing = "border-box";


}

// create the footer section

let footerSection = document.createElement("div");
let footerText = document.createTextNode("Copyright 2023");

footerSection.appendChild(footerText);
document.body.appendChild(footerSection);   
footerSection.style.textAlign = "center";
footerSection.style.backgroundColor = "#23a96e";
footerSection.style.padding = "10px"; 






















