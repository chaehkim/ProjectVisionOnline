$(document).ready(function () {
    $("#getAllProjects").on("click", function (event) {
        event.preventDefault();
        $.ajax("/getAllProjects", {
            type: "POST"
        }).then(
            function (result) {
                $("#project-list").empty();
                $("#newProjectMessage").empty();
                for (i = 0; i < result.length; i++) {
                    $("#project-list")
                        .append($("<tr><td>" + result[i].id + "</td>" + "<td>" + result[i].project_name + "</td></tr>"))
                };
            }
            );
    });

    // Launch New Project Modal
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

    // Add a new Project On-Click
    $("#addNewProjectButton").on("click", function (event) {
        event.preventDefault();
        var newProject = {
            project_name: $(newProjectName).val().trim()
        };

        $.ajax("/insertNewProject", {
            type: "POST",
            data: newProject
        }).then(
            function () {
                $("#newProjectMessage").append($("<p>New Project has been successfully added.  Click on Get Projects to refresh the list.</p>"));
            }
            );
    });
});
