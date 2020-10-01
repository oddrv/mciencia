var dropdown = document.querySelector("nav .dropdown-menu");
    var button = document.querySelector("nav .menu");


    function menu() {
    if (dropdown.style.display == "grid") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "grid";
    }}

    window.addEventListener("resize", function() {
    if (window.innerWidth > 700) {
        dropdown.style.display = "none";
        button.innerHTML = "menu";
    }
    })
