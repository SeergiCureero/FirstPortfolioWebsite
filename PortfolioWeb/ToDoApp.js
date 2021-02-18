var inputText = document.querySelector("input");

function showInput(){
    var ul = document.querySelector("div.toDoList ul");
    var li = document.createElement("li");
    var delBut = document.createElement("button");
    var doneBut = document.createElement("button");
    var trashImg = document.createElement("img");
    var doneImg = document.createElement("img");
    var div4Images = document.createElement("div");

    //element 
    li.appendChild(document.createTextNode(inputText.value));
    li.setAttribute("id", String(inputText.value));
    li.style.fontFamily="'Snell Roundhand', cursive";
    li.style.fontSize="30px";

    //trash image
    trashImg.setAttribute("src", "images/TrashBin.png");
    trashImg.style.width="20px";

    //done image
    doneImg.setAttribute("src", "images/Check.png");
    doneImg.style.width="20px";

    //delete button
    delBut.appendChild(trashImg);
    delBut.setAttribute("onclick", "delElement()");
    delBut.setAttribute("class", "delBut");

    //done button
    doneBut.appendChild(doneImg);
    doneBut.setAttribute("onclick", "checkElement()");
    doneBut.setAttribute("class", "doneBut");

    //div for images
    div4Images.appendChild(doneBut);
    div4Images.appendChild(delBut);
    div4Images.style.display="inline";

    li.appendChild(div4Images);
    ul.appendChild(li);
}

function checkElement(){
    var elementText = event.target.parentElement.parentElement.parentElement.innerHTML; //gets innerHTML from <li>
    var result = elementText.strike();
    document.getElementById(event.target.parentElement.parentElement.parentElement.id).innerHTML = result;
}

function delElement(){
    event.target.parentElement.parentElement.parentElement.remove(); //removes <li> from the list
}