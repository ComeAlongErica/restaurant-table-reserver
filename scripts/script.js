"use strict";
$(document).ready(() => {
    // hides container on start up
    $("#form-container").hide(); 

    //sets up tables before anything else
    function setupTables() {
        for(var i = 1; i <= 9; i++) {
            $(".table-container").append(`<div class="table available" id=${i}>${i}</div>`)
        }
    }
    setupTables();

    //event listener for table, show form, publish table
    $(".available").on("click", (event) => {
        let table = event.target;
        $("#form-container").show("slow"); // shows form
        $(".table-num").append(`<span class="table-id-num"> ${event.target.id}</span>`); // displays table number
        $(".clear").on("click", (event) => {
            $("#form-container").hide(); // hides form
            $(".table-id-num").remove(); // resets the table shown on form
        });
        
        // when save button is clicked
        $("button").on("click", (event) => {
            saveRes(table);
        });

    });

    // hover effect for available tables
    $(".available").on("mouseover", (event) => {
        $(event.target).fadeTo(100, 0.5);
    });
    $(".available").on("mouseout", (event) => {
        $(event.target).fadeTo(100, 1);
    });
   
    // function execute when save button is hit
    function saveRes(tableID) {
            $("#form-container").hide(); //hides form
            $(tableID).removeClass("available")
                            .addClass("reserved")
                            .unbind("mouseover")
                            .unbind("click");;
            $(".table-id-num").remove(); // resets the table shown on form

    };

});
