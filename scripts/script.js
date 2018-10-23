"use strict";
$(document).ready(() => {
    let table;

    //sets up tables before anything else
    function setupTables() {
        for(var i = 1; i <= 9; i++) {
            $(".table-container").append(`<div class="table available" id=${i}>${i}</div>`)
        }
    }
    setupTables();

    //event listener for table, show form, publish table
    $(document).on("click", ".available", (event) => {
        table = event.target;
        $("#form-container").fadeIn("slow"); // shows form
        $(".table-num").append(`<span class="table-id-num"> ${event.target.id}</span>`); // displays table number
        $(".clear").on("click", (event) => {
            $("#form-container").fadeOut("fast", 0); //hides form
            $(".table-id-num").remove(); // resets the table shown on form
        });

    });

    // when save button is clicked
    // get values for inputs
    $(document).on("click", "button", (event) => { 
        saveRes(table);
        //clears input
        $("input").each(function() {
            $(this).val("");
        });
   });

    // hover effect for available tables
    $(document).on("mouseover", ".available", (event) => {
        $(event.target).fadeTo(100, 0.5);
    });
    $(document).on("mouseout", ".available", (event) => {
        $(event.target).fadeTo(100, 1);
    });

    //hover effect for tool tip
    $(document).on("mouseover", ".reserved", (event) => {
        if (true) {
            console.log("hey");
             $(event.target).append(`<div class="tooltip">
             <p class="table-info">Name: ${$(event.target).attr("name")}<p>
             <p class="table-info">Party Size: ${$(event.target).attr("partysize")}</p>
             </div>`);
            $(".tooltip").fadeIn("slow");
        }
    });
    // remove tooltip element on mouse out
    $(document).on("mouseout", ".reserved", (event) => {
         $(".tooltip").remove();
    });


    // function execute when save button is hit
    function saveRes(tableID) {
        $(table).attr("name", $("input").eq(0).val()) //setting attribute (name, value)
        .attr("phone", $("input").eq(1).val())
        .attr("partysize", $("input").eq(2).val()); // eq reduce match elements to index num -> google, .val gets value of input

            $("#form-container").fadeOut("fast", 0); //hides form
            $(tableID).removeClass("available")
                            .addClass("reserved")
                            .unbind("mouseover")
                            .unbind("click");;
            $(".table-id-num").remove(); // resets the table shown on form
    };

});
