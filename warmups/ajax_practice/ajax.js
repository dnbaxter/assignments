//AJAX = Asynchronous Javascript and XML
//XML = old JSON
//
//-- AJAX --
//
//xhr.readyState -
//    0 unsent
//    1 opened
//    2 headers received
//    3 loading
//    4 DONE
//xhr.responseText

// 200 is a normal GET request


var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
//        console.log(JSON.parse(xhr.responseText));
        var data = JSON.parse(xhr.responseText);
        console.log(data);
//        document.getElementById("data").innerHTML = data;
//        document.getElementById("date").textContent = "<h1>Hello World</h1>"
//        document.getElementById("name").textContent = data.name;
//        document.getElementById("birth-year").textContent = data.birth_year;
//        document.getElementById("eye-color").textContent = data.eye_color;
        
        var resultsText = "";
        for (var prop in data) {
            resultsText += "<h3>" + prop + ": " + data[prop] + "</h3>"
        }
        document.getElementById("results").innerHTML = resultsText;
    }
}

xhr.open("GET", "http://swapi.co/api/people/1/", true);
xhr.send();