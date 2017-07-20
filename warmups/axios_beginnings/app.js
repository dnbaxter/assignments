let search = (input) => {
    axios.get(`http://swapi.co/api/people/${input}`).then((response) => {
        console.log(response);
        document.getElementById("name").innerHTML = "Name: " + response.data.name;
        document.getElementById("gender").innerHTML = "Gender: " + response.data.gender;
        document.getElementById("birth-year").innerHTML = "Birth Year: " + response.data.birth_year;
    })
};



document.getElementById("search").addEventListener("keyup", function (e) {

    //console.log(e);

    if(e.key === "Enter") {
        //console.log(e.target.value);
        search(e.target.value);
    }

});