/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menu() {
  document.getElementById("nav-menu").classList.toggle("nav-switch");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nav-button')) {
    var dropdowns = document.getElementsByClassName("nav-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('nav-switch')) {
        openDropdown.classList.remove('nav-switch');
      }
    }
  }
}
