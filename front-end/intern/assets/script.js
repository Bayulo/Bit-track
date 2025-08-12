// Global toggle variable
let isOpen = false;

function show_menu(){
    const icon = document.getElementById("open_close_nav");
    const items = document.querySelectorAll(".view_on_mobile");
    const responsive_nav = document.getElementById("responsive_nav");

    icon.setAttribute("src", "/front-end/intern/assets/images/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
    items.forEach(item => {item.style.display = "block"; item.style.height = "6vh"});
    responsive_nav.style.width = "30vw";
    responsive_nav.style.position = "absolute";
}

function hide_menu(){
    const icon = document.getElementById("open_close_nav");
    const items = document.querySelectorAll(".view_on_mobile");
    const responsive_nav = document.getElementById("responsive_nav");

    icon.setAttribute("src", "/front-end/intern/assets/images/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
    items.forEach(item => item.style.display = "none");
    responsive_nav.style.width = "9vw";
    responsive_nav.style.position = "static";
}

function showNavbar() {
    if (!isOpen) {
        // Show menu
        popupBackground();
        show_menu();
    } else { // Hide menu
        hide_menu();
    }
    isOpen = !isOpen; // Flip the toggle
}


function showProfile(){
    popup_is_open = false;
    const profile_icon = document.getElementById("profile_info");
    profile_icon.style.display = "flex";
    popupBackground();
}

function closeProfile(){
    popup_is_open = true;
    const close_profile = document.getElementById("profile_info");
    close_profile.style.display = "none";
    popupBackground();
}

function showSupervisor(){
    const supervisor = document.getElementById("supervisor_info");
    supervisor.style.display = "flex";
    popup_is_open = false;
    popupBackground();
    hide_menu();
}

function closeSupervisor(){
    popup_is_open = true;
    const supervisor = document.getElementById("supervisor_info");
    supervisor.style.display = "none";
    popupBackground();

}
let popup_is_open = false;
function popupBackground(){
    const background = document.getElementById("back_blur");
    if(!popup_is_open){
        background.style.display = "block";
        background.addEventListener("click", function closePopup(){
            background.style.display = "none";
            hide_menu();
            popup_is_open = false;
        })
    }
    else{
        background.style.display = "none";
        hide_menu();
    }
    
}
// function close_all_open(){
//     auto_close !== 0 ? (closeSupervisor() && closeProfile() && auto_close = 0) : continue;
// }


// const change_image_button = document.getElementById("change_image");
// const image_upload = document.getElementById("image_upload");
// const picture_change = document.getElementById("picture_change");
// console.dir(image_upload);

// change_image_button.addEventListener("click", (event) => {
//     event.preventDefault();
//     const file = image_upload.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             const imageDataUrl = reader.result;
//             picture_change.innerHTML = `<img src="${imageDataUrl} alt="uploaded image" height="100px" width="100px">`;
//         };
//         reader.readAsDataURL(file);
//     }
// });


//Calendar
const month_year = document.getElementById("month-year");

const months = [January, February, March, April, May, June, July, August, Septemeber, October, November, December];
let current_date = new Date();
let today = new Date();

