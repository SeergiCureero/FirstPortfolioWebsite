var inputText = document.querySelector("input");

function showInput(){
    var ul = document.querySelector("div.toDoList ul");
    var li = document.createElement("li");
    var delBut = document.createElement("button");

    li.appendChild(document.createTextNode(inputText.value));
    delBut.appendChild(document.createTextNode("X"));
    delBut.setAttribute("onclick", "delElement()");
    

    li.appendChild(delBut);
    ul.appendChild(li);

}

function delElement(){
    event.target.parentElement.remove();
}