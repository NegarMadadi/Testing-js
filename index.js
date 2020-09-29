console.log("Hello this is a message from javascript. Showing in console.")

//window.alert("This is alert. Do not overuse this method, as it prevents the user from accessing ")

document.write("<h2>Hello this text is added at the bottom of the body.</h2>")


//----------------------------Single Line comment ----------------

/*
multiLine comment
 */


//------------------------------------------------------------------------------
var headLine = document.getElementById("changeMe");

headLine.innerHTML = "Hello World Wide Web!";
headLine.style.color = "Pink";


//---------------------------------------------------------------------------------
var ulElements = document.getElementsByTagName("ul");

console.log(ulElements);

console.log("This is an unordered List. It has the class name of " + ulElements[0].className)


//-----------------------------------------------------------------------------------------
var btn = document.getElementById("btnDont");

btn.innerHTML = "Click Me!"

btn.addEventListener("click", changeUL)

function changeUL() {

    //ulElements[0].style.backgroundColor = "Green"

    ulElements[0].innerHTML = "<li>Cat</li> <li>Dog</li> <li>Horse</li>";

    for (var index = 0; index < ulElements.length; index++) {

        var element = ulElements[index];

        if (index % 2 === 0) {
            element.classList.add("evenUl")

        } else {
            element.classList = "oddUl";
        }
    }
}


//------------------------------------------------------------------------------------------------------
//console.log(document.getElementById("secret"));

document.getElementById("secret").addEventListener("mouseover", function () {
    document.getElementsByTagName("h2")[0].innerHTML = "This is reacting to a EventListener!"
})

document.getElementById("secret").addEventListener("mouseleave", function () {
    document.getElementsByTagName("h2")[0].innerHTML = "Secret Under This Text?"
})


//--------------------------------------------------------------------------------------------

var ticTacBoard = document.getElementById("ticTacBoard");

ticTacBoard.style.width = "300px";
ticTacBoard.style.height = "300px";
ticTacBoard.style.backgroundColor = "gray";

console.log(ticTacBoard.children.length);
console.log(ticTacBoard)

for (var index = 0; index < ticTacBoard.children.length; index++) {

    var element = ticTacBoard.children[index];

    element.style.height = "100px";
    element.style.width = "100px";


    element.style.float = "Left";

    if (index % 2 === 0) {
        element.style.backgroundColor = "Black";
    } else {
        element.style.backgroundColor = "White";
    }


//---------------------------------------------------------------------------

}

