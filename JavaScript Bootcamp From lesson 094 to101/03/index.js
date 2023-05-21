  let myDiv = document.getElementsByTagName("div")[0];
  let textOne = document.createTextNode("Start");
  let textTwo = document.createTextNode("End");
  let divOne = document.createElement("div");
  let divTwo = document.createElement("div");

  divOne.classList.add("start");
  divOne.setAttribute("title","Start Element");
  divOne.setAttribute("data-value","Start");
  divOne.appendChild(textOne);

  divTwo.classList.add("end");
  divTwo.setAttribute("title","End Element");
  divTwo.setAttribute("data-value","End");
  divTwo.appendChild(textTwo);

  myDiv.prepend(divOne);
  myDiv.append(divTwo);

  

  myDiv.nextElementSibling.remove();

  

  