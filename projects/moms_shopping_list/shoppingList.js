var counter = 1;

function enter_task() {
    var text = $('#enter_task').val();
    $('#todo_list').append('<li><input type="submit" class="done" id="delete' + counter + '" value="X">' + " " + text + '</li>');
    $("#enter_task").val("");
    $("#enter_task").focus();



    $('#delete' + counter).click(function () {
        $(this).parent().remove();
    });

    counter++;
};

$(function () {
    $('#add').on('click keypress', enter_task);
    
});

$('#enter_task').keypress(function (e) {
    if (e.which == 13) {
        $('#todo_list').submit(enter_task);
        //return false;    //<---- Add this line
    }
});