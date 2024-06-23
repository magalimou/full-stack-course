document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("contrast-button");
    button.addEventListener("click", function() {
        document.body.classList.toggle("contrast");
    });
});
