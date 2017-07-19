$(document).ready(function () {
    $('#price').keypress(function (event) {
        return isNumber(event, this)
    });
});
// THE SCRIPT THAT CHECKS IF THE KEY PRESSED IS A NUMERIC OR DECIMAL VALUE.
function isNumber(evt, element) {

    var charCode = (evt.which) ? evt.which : event.keyCode

    if (
        (charCode != 45 || $(element).val().indexOf('-') != -1) && // “-” CHECK MINUS, AND ONLY ONE.
        (charCode != 46 || $(element).val().indexOf('.') != -1) && // “.” CHECK DOT, AND ONLY ONE.
        (charCode < 48 || charCode > 57))
        return false;

    return true;
};


$(function () {
    $('#todo_list').on('submit', function (e) { //use on if jQuery 1.7+
        e.preventDefault(); //prevent form from submitting

        var myData = {
            "title": $('#title').val(),
            "description": $('#description').val(),
            "price": $('#price').val(),
            "imgUrl": $('#image').val(),
            "completed": $('input:checkbox').is(':checked')
        }
        //console.log(myData); //use the console for debugging, F12 in Chrome, not alerts


        $.ajax({
            url: 'https://api.vschool.io/dustin/todo',
            method: "POST",
            dataType: 'JSON', // NOTE: This is what allows the cross-domain ajax call.
            data: myData,
            success: function (data, status, xhr) {
                var title = data.title;
                var description = data.description;
                var price = data.price;
                var imgUrl = data.imgUrl;
                var completed = data.completed;


                var newRow = `
            <tr>
                <td>${title}</td>
                <td>${description}</td>
                <td>${price}</td>
                <td><img src="${imgUrl}"/></td>
                <td>${completed}</td>
            </tr>
        `
                // inserts new <td> into the table
                $('#table').append(newRow);
            }
        });

        // resets document after submit
        $('#todo_list').each(function () {
            this.reset();
        });
    });
});


$.ajax({
    url: "https://api.vschool.io/dustin/todo",
    method: "GET",
    success: function (data) {
        for (var i = 0; i < data.length; i++) {
            var title = data[i].title;
            var description = data[i].description;
            var price = data[i].price;
            var imgUrl = data[i].imgUrl;
            var completed = data[i].completed;
            if (completed === true) {
                completed = "<input type='checkbox' id='checked" + "' >";
                $(document).ready(function () {

                    $("#checked").on("click", function () {
                        var findCheck = $(this).closest('tr');
                        findCheck.css({'text-decoration': 'line-through',
                                       'background-color': 'silver'
                                      });
                    });
                });
            } else {
                completed = "DONE"
            }



            //            var newCheckbox = $('<input>', {
            //                            type: "checkbox",
            //                            "checked": "unchecked"
            //                        });
            //            

            var newRow = `
            <tr>
                <td>${title}</td>
                <td>${description}</td>
                <td>${price}</td>
                <td><img src="${imgUrl}"/></td>
                <td>${completed}</td>

            </tr>
        `

            // inserts new <td> into the table
            $('#table').append(newRow);
        }

        //console.log(data)

    }
});

$('#checked').change(function () {
    var c = this.checked ? '#f00' : '#000';
    $('#table').css('color', c);
});