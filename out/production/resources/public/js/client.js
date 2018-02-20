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
// var people = {"people" : [
//         {"name" : "Zech", "city" : "Whitmore"},
//         {"name" : "Jake", "city" : "Saratoga Springs"},
//         {"name" : "Kym", "city" : "Kailua-Kona"},
//         {"name" : "Joan", "city" : "Chicago"},
//         {"name" : "Lori", "city" : "Miranar"},
//         {"name" : "Manny", "city" : "Santa Anna"},
//         {"name" : "Ted", "city" : "Chicago"},
//         {"name" : "Scott", "city" : "Fridley"},
//         {"name" : "Mark", "city" : "Cooperstown"},
//         {"name" : "Koddie", "city" : "Hexley"}
//     ]
// };


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



