/* script.js */

console.log('Script file loaded successfully.');

function myFunction(menuId) {
    var dropdown = document.getElementById(menuId);
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

// Close the dropdown menus if the user clicks outside of them
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

