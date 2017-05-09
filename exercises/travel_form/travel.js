var form = document.getElementById('form');
var array = [];

function travelForm() {
    var fName = form.elements["fName"].value;
    var lName =  form.elements["lName"].value
    var age =  form.elements["age"].value
    var gender = form.elements["gender"].value;
    var locations = form.elements["places"].value;
    var diet = form.elements["diet"];
    
    if (form.elements["vegatarian"].checked){
        array.push(document.getElementById('vegatarian').value)
    }
    if (form.elements["kosher"].checked){
        array.push(document.getElementById('kosher').value)
    }
    if (form.elements["lactoseFree"].checked){
        array.push(document.getElementById('lactoseFree').value)
    }
    if (form.elements["nuts"].checked){
        array.push(document.getElementById('nuts').value)
    }


    alert("First name: " + fName +
         "\nLast name: " + lName +
         "\nAge: " + age +
         "\nGender: " + gender +
         "\nLocation: " + locations +
         "\nDietary restrictions: " + array.join(', '));     
}