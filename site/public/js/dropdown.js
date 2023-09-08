document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("dropdown");
    var dropdownMenu = document.getElementById("dropdown-menu");
// Adicione um ouvinte de eventos ao ícone da dropdown
    dropdown.addEventListener("click", function() {
    // Alterne a exibição do dropdown-menu
     if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
      } else {
        dropdownMenu.style.display = "none";
    }
    });
});