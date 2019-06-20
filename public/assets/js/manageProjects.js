$(document).ready(function () {
    var modal2 = document.getElementById('myModalProjectCosts');
    var btn2 = document.getElementById("getProjectCostsButton");
    var span = document.getElementsByClassName("close2")[0];
    btn2.onclick = function () {
        modal2.style.display = "block";
    }
    span.onclick = function () {
        modal2.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
});

$(document).ready(function () {
    var modal3 = document.getElementById('myModalAddAllocationRecord');
    var btn3 = document.getElementById("getNewAllocationRecordModal");
    var span = document.getElementsByClassName("close3")[0];
    btn3.onclick = function () {
        modal3.style.display = "block";
    }
    span.onclick = function () {
        modal3.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }
});

$(document).ready(function () {
    var modal1 = document.getElementById('myModalProjectAllocations');
    var btn1 = document.getElementById("getProjectAllocations");
    var span = document.getElementsByClassName("close1")[0];
    btn1.onclick = function () {
        modal1.style.display = "block";
    }
    span.onclick = function () {
        modal1.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }
});

$(document).ready(function () {
    $("#getProjectAllocations").on("click", function (event) {
        event.preventDefault();
        var selectedProject = {
            project_name: $(chosenProject).val().trim()
        };
        $.ajax("/getProjectAllocations", {
            type: "POST",
            data: selectedProject
        }).then(
            function (result) {
                $("#project-allocations").empty();
                $("#newAllocationRecordMessage").empty();
                for (i = 0; i < result.length; i++) {
                    $("#project-allocations").append($
                        ("<tr><td class=align-left>" + result[i].resource_name + "</td>"
                        + "<td class=align-left>" + result[i].resource_role + "</td>"
                        + "<td class=align-left>" + result[i].resource_location + "</td>"
                        + "<td>" + numeral(result[i].resource_runrate).format('$0,0[.]00') + "</td>"
                        + "<td>" + numeral(result[i].january / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].february / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].march / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].april / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].may / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].june / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].july / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].august / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].september / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].october / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].november / 100).format('0%') + "</td>"
                        + "<td>" + numeral(result[i].december / 100).format('0%') + "</td>"
                        + "<td class=boldme>" + numeral(result[i].annualizedFTE / 12 / 100).format('0.0') + "</td>"
                        + "</tr>"
                        ))
                }
            }
            );
        $.ajax("/getProjectAllocationsTotals", {
            type: "POST",
            data: selectedProject
        }).then(
            function (result) {
                $("#project-allocations").append($
                    ("<tr><td class=boldme>Totals:</td>"
                    + "<td></td>"
                    + "<td></td>"
                    + "<td></td>"
                    + "<td class=boldme>" + numeral(result[0].janProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].febProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].marProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].aprProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].mayProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].junProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].julProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].augProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].sepProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].octProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].novProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].decProjectTotal / 100).format('0.0') + "</td>"
                    + "<td class=boldme>" + numeral(result[0].totalProjectFTE / 12 / 100).format('0.0') + "</td>"
                    + "</tr>"
                    ))
            });
    });

    $(document).ready(function () {
        $("#getProjectCostsButton").on("click", function (event) {
            event.preventDefault();
            var selectedProject = {
                project_name: $(chosenProject).val().trim()
            };
            $.ajax("/getProjectAllocations", {
                type: "POST",
                data: selectedProject
            }).then(
                function (result) {
                    var janSubTotal = 0;
                    var febSubTotal = 0;
                    var marSubTotal = 0;
                    var aprSubTotal = 0;
                    var maySubTotal = 0;
                    var junSubTotal = 0;
                    var julSubTotal = 0;
                    var augSubTotal = 0;
                    var sepSubTotal = 0;
                    var octSubTotal = 0;
                    var novSubTotal = 0;
                    var decSubTotal = 0;
                    var projectSubTotal = 0;
                    $("#project-costs").empty();
                    $("#newAllocationRecordMessage").empty();
                    for (i = 0; i < result.length; i++) {
                        var janSubTotal = janSubTotal + result[i].january / 100 * result[i].resource_runrate / 12;
                        var febSubTotal = febSubTotal + result[i].february / 100 * result[i].resource_runrate / 12;
                        var marSubTotal = marSubTotal + result[i].march / 100 * result[i].resource_runrate / 12;
                        var aprSubTotal = aprSubTotal + result[i].april / 100 * result[i].resource_runrate / 12;
                        var maySubTotal = maySubTotal + result[i].may / 100 * result[i].resource_runrate / 12;
                        var junSubTotal = junSubTotal + result[i].june / 100 * result[i].resource_runrate / 12;
                        var julSubTotal = julSubTotal + result[i].july / 100 * result[i].resource_runrate / 12;
                        var augSubTotal = augSubTotal + result[i].august / 100 * result[i].resource_runrate / 12;
                        var sepSubTotal = sepSubTotal + result[i].september / 100 * result[i].resource_runrate / 12;
                        var octSubTotal = octSubTotal + result[i].october / 100 * result[i].resource_runrate / 12;
                        var novSubTotal = novSubTotal + result[i].november / 100 * result[i].resource_runrate / 12;
                        var decSubTotal = decSubTotal + result[i].december / 100 * result[i].resource_runrate / 12;
                        var projectSubTotal = janSubTotal + febSubTotal + marSubTotal + aprSubTotal + maySubTotal + junSubTotal + julSubTotal + augSubTotal + sepSubTotal + octSubTotal + novSubTotal + decSubTotal;
                        $("#project-costs").append($
                            ("<tr><td class=align-left>" + result[i].resource_name + "</td>"
                            + "<td class=align-left>" + result[i].resource_role + "</td>"
                            + "<td class=align-left>" + result[i].resource_location + "</td>"
                            + "<td>" + numeral(result[i].resource_runrate).format('$0,0[.]00') + "</td>"
                            + "<td>" + numeral(result[i].january / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].february / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].march / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].april / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].may / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].june / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].july / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].august / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].september / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].october / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].november / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].december / 100 * result[i].resource_runrate / 12).format('$0,0') + "</td>"
                            + "<td>" + numeral(result[i].annualizedFTE / 12 / 100 * result[i].resource_runrate).format('$0,0') + "</td>"
                            + "</tr>"
                            ))
                    }
                    $("#project-costs").append($
                        ("<tr><td class=boldme>Project Totals:</td>"
                        + "<td></td>"
                        + "<td></td>"
                        + "<td></td>"
                        + "<td class=boldme>" + numeral(janSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(febSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(marSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(aprSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(maySubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(junSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(julSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(augSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(sepSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(octSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(novSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(decSubTotal).format('$0,0') + "</td>"
                        + "<td class=boldme>" + numeral(projectSubTotal).format('$0,0') + "</td>"
                        + "</tr>"
                        ))
                }

                );
        })
        $(document).ready(function () {
            $("#addNewAllocationRecord").on("click", function (event) {
                event.preventDefault();
                var newAllocationRecord = {
                    project_name: $(chosenProject).val().trim(),
                    resource_name: $(addResourceName).val().trim(),
                    january: $(addJanuary).val().trim(),
                    february: $(addFebruary).val().trim(),
                    march: $(addMarch).val().trim(),
                    april: $(addApril).val().trim(),
                    may: $(addMay).val().trim(),
                    june: $(addJune).val().trim(),
                    july: $(addJuly).val().trim(),
                    august: $(addAugust).val().trim(),
                    september: $(addSeptember).val().trim(),
                    october: $(addOctober).val().trim(),
                    november: $(addNovember).val().trim(),
                    december: $(addDecember).val().trim()
                };
                $.ajax("/addNewAllocationRecord", {
                    type: "POST",
                    data: newAllocationRecord
                }).then(
                    function () {
                        $("#newAllocationRecordMessage").append($("<p>New record has been successfully added.  Click on Get Project Allocations to refresh the project.</p>"));
                    }
                    );
            })
        });
    });
})

