$(document).ready(function () {
  var modal = document.getElementById('loginModal');
  var btn = document.getElementById("launchLoginModal");
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
});

$(document).ready(function () {
  $("#loginButton").on("click", function (event) {
    event.preventDefault();
    var existingUser = {
      username: $("#username").val().trim(),
      password: $("#password").val().trim()
    };
    $.ajax("/loginUser", {
      type: "POST",
      data: existingUser
    }).then(
      function (result) {
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();
        var loginStatus = "Not Set";
        for (i = 0; i < result.length; i++) {
          if (username === result[i].user_name && password === result[i].password) {
            var loginStatus = "Successful";
          } else if (loginStatus === "Successful") {
            var loginStatus = "Successful";
          } else {
            var loginStatus = "Failed";
          }
        };
        if (loginStatus === "Successful") {
          window.location.href = 'dashboard.html';
        } else if (loginStatus === "Failed") {
          $("#loginFailMessage").empty();
          $("#loginFailMessage").append($("<p>Login failed.  Please re-try.</p>"));
        }
      });
  })
});

