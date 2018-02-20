var index = 0;
nameArray = [];


$(document).ready(function () {
       goGetNames()
    });

function goGetNames() {
    $.ajax({
        type : "GET",
        url : "/popcorn",
        success : function (data) {
            nameArray = data.people;
            appendPeople();
        }
    });
    enable();
}


function enable() {
    $("#getNameBtn").on("click", function () {
        ++index >= nameArray.length && (index = 0);
        appendPeople();
    });

}

function appendPeople() {

    for (var i = 0; i < 11; i++)
        $("#textName").text(nameArray[index].name);
    $("#textCity").text(nameArray[index].city);
}



