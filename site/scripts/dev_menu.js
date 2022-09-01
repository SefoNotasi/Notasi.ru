function validate(e) {
    var e = e || window.event, // make this works in different browsers 
        input = document.getElementById("menu"), // ID of input, original ID is "navbar-dropdown-toggle".
        label = document.getElementById("nav-label"), // ID of label, original ID is "checkboxNavbar".
        icon = document.getElementById("nav-icon"); // ID of span (icon) inside label.

    if ([input, label, icon].indexOf(e.target) < 0 && input.checked) {
        input.checked = false;
        return false;
    }
};

document.addEventListener("click", validate);

var nav = document.getElementById("nav-content"); // ID of nav, original ID is "storeDropdown".
nav.addEventListener("click", function (e) {
    e.stopPropagation();
});