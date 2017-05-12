//document.getElementById("text").textContent = "Whatever I want";     <-- javascript -->

$("#text").text("This is from jQuery"); // selects id of text and inserts text
$("input[type='text']") // selects all inputs the type of text
$("ul.navbar li") // selects only ul's with a class of navbar and their li's
var navbarLis = $("ul.navbar li") // creates a variable for calling that HTML quicker

console.log($("ul li").parent()) // grabs the parent(s) of the selected element(s)

//$("#say-name").on("mouseenter mouseleave click", function () {
//    console.log("My name is Jimmy. I'm a button.");
//});

$("#say-name").on({
    click: function () {
        console.log("Clicked!")
    },
    mouseover: function () {
        console.log("Hovered!")
    }
});


$("ul.navbar li").click(function () {
    console.log($(this).text())
});

$("ul.navbar li").click(function () {
    var text = $(this).text();
    if (text === "Clicked!") {
        $(this).text("Unclicked!")
    } else {
        $(this).text("Clicked!")
    }
});


// Select button
// Add a click handler
    // When clicked: select the div of todos
    // append some new HTML
$("#add-todo").click(function() {
   $("#todos").append("<div><input type='checkbox'/>" + $("#new-todo").val() + "</div>");
    $("#new-todo").val("");
    $("#new-todo").focus();
});



// Change the color of the selected text to red
$("#para").click(function() {
    $(this).css("color", "red");
});


// Add and remove colors from the CSS
$("#para").click(function() {
    $(this).addClass("red");
    $(this).removeClass("blue");
});

















