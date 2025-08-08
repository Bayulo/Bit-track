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
        responsive_nav.style.position = "absolute";

    } else {
        // Hide menu
        icon.setAttribute("src", "/front-end/intern/assets/images/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
        items.forEach(item => item.style.display = "none");
        responsive_nav.style.width = "9vw";
        responsive_nav.style.position = "relative";
    }

    isOpen = !isOpen; // Flip the toggle
}


let auto_close = 0;

function showProfile(){
    const profile_icon = document.getElementById("profile_info");
    profile_icon.style.display = "flex";
    auto_close ++;
}

function closeProfile(){
    const close_profile = document.getElementById("profile_info");
    close_profile.style.display = "none";
}

function showSupervisor(){
    const supervisor = document.getElementById("supervisor_info");
    supervisor.style.display = "flex";
    auto_close ++;
}

function closeSupervisor(){
    const supervisor = document.getElementById("supervisor_info");
    supervisor.style.display = "none";
}
// function close_all_open(){
//     auto_close !== 0 ? (closeSupervisor() && closeProfile() && auto_close = 0) : continue;
// }
function close_all_open() {
    if (auto_close !== 0) {
        closeSupervisor();
        closeProfile();
        auto_close = 0;
    }
}