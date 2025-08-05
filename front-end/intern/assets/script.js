// Global toggle variable
let isOpen = false;

function showNavbar() {
    const icon = document.getElementById("open_close_nav");
    const items = document.querySelectorAll(".view_on_mobile");
    const responsive_nav = document.getElementById("responsive_nav");

    if (!isOpen) {
        // Show menu
        icon.setAttribute("src", "/front-end/intern/assets/images/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
        items.forEach(item => item.style.display = "block");
        responsive_nav.style.width = "35vw";
    } else {
        // Hide menu
        icon.setAttribute("src", "/front-end/intern/assets/images/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
        items.forEach(item => item.style.display = "none");
    }

    isOpen = !isOpen; // Flip the toggle
}
