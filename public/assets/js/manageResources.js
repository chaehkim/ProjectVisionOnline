$(document).ready(function () {
    $("#getAllResources").on("click", function (event) {
        event.preventDefault();
        $.ajax("/getAllResources", {
            type: "POST"
        }).then(
            function (result) {
                $("#resource-list").empty();
                $("#newResourceMessage").empty();
                for (i = 0; i < result.length; i++) {
                    $("#resource-list").append($("<tr><td>" + result[i].resource_name + "</td>"
                        + "<td>" + result[i].resource_role + "</td>"
                        + "<td>" + result[i].resource_location + "</td>"
                        + "<td class=align-right>" + numeral(result[i].resource_runrate).format('$0,0.00') + "</td></tr>"));
                };
            }
            );
    });

    // Launch Modal
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Add a new Resource
    $("#addNewResourceButton").on("click", function (event) {
        event.preventDefault();
        var newResource = {
            resource_name: $(newResourceName).val().trim(),
            resource_role: $(newResourceRole).val().trim(),
            resource_location: $(newResourceLocation).val().trim(),
            resource_runrate: $(newResourceRunrate).val().trim()
        };
        $.ajax("/insertNewResource", {
            type: "POST",
            data: newResource
        }).then(
            function () {
                $("#newResourceMessage").append($("<p>New Resource has been successfully added.  Click on Get All Resources to refresh the list.</p>"));
            }
            );
    });
})