function mouseOver() {
    document.getElementById('color').style.background = "blue";
}

function mouseOut() {
    document.getElementById('color').style.background = "silver";
}

function mouseClick() {
    document.getElementById('color').style.background = "red";
}

function mouseUp() {
    document.getElementById('color').style.background = "yellow";
}

function doubleClick() {
    document.getElementById('color').style.background = "green";
}

function mouseScroll() {
    document.getElementById('color').style.background = "orange";
}

//window.addEventListener("scroll", colorScroll, true);
//function colorScroll {
//    document.getElementById('color').style.background = "orange";
//}


window.addEventListener("keydown", checkKeyPressed2, false);
 
function checkKeyPressed2(r) {
    if (r.keyCode == "66") {
        document.getElementById('color').style.background = "blue";
    }
    if (r.keyCode == "82") {
        document.getElementById('color').style.background = "red";
    }
    if (r.keyCode == "89") {
        document.getElementById('color').style.background = "yellow";
    }
    if (r.keyCode == "71") {
        document.getElementById('color').style.background = "green";
    }
    if (r.keyCode == "79") {
        document.getElementById('color').style.background = "orange";
    }
}