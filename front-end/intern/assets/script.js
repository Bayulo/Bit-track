// Global toggle variable
let isOpen = false;

function show_menu(){
    const icon = document.getElementById("open_close_nav");
    const items = document.querySelectorAll(".view_on_mobile");
    const responsive_nav = document.getElementById("responsive_nav");

    icon.setAttribute("src", "/front-end/intern/assets/images/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
    items.forEach(item => {item.style.display = "block"; item.style.height = "6vh"});
    responsive_nav.style.width = "40vw";
    responsive_nav.style.position = "absolute";
}

function hide_menu(){
    const icon = document.getElementById("open_close_nav");
    const items = document.querySelectorAll(".view_on_mobile");
    const responsive_nav = document.getElementById("responsive_nav");

    icon.setAttribute("src", "/front-end/intern/assets/images/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
    items.forEach(item => item.style.display = "none");
    responsive_nav.style.width = "12vw";
    responsive_nav.style.position = "static";
    // popup_is_open = false;
}

function showNavbar() {
    if (!isOpen) {
        // Show menu
        show_menu();
        popup_is_open = true;
        popupBackground();
    } else { // Hide menu
        hide_menu();
        popup_is_open = false;
        popupBackground();
    }
    isOpen = !isOpen; // Flip the toggle
}


function showProfile(){
    popup_is_open = true;
    const profile_icon = document.getElementById("profile_info");
    profile_icon.style.display = "flex";
    popupBackground();
}

function closeProfile(){
    popup_is_open = false;
    const close_profile = document.getElementById("profile_info");
    close_profile.style.display = "none";
    popupBackground();
}

function showSupervisor(){
    const supervisor = document.getElementById("supervisor_info");
    supervisor.style.display = "flex";
    popup_is_open = true;
    popupBackground();
    hide_menu();
}

function closeSupervisor(){
    popup_is_open = false;
    const supervisor = document.getElementById("supervisor_info");
    supervisor.style.display = "none";
    popupBackground();
}
let popup_is_open = false;
function popupBackground(){
    const background = document.getElementById("back_blur");
    if(popup_is_open){
        background.style.display = "block";
        background.addEventListener("click", function closePopup(){
            background.style.display = "none";
            hide_menu();
            popup_is_open = false;
            isOpen = false;
        })
    }
    else{
        background.style.display = "none";
        hide_menu();
    }
    
}

//edit page image upload
// const image_input = document.getElementById("image_upload");
// const picture_display = document.getElementById("picture_change");

// image_input.onchange = function change_pic(){
//     picture_display.src = URL.createObjectURL(image_input.files[0]);
// }

//Calendar
const month_year = document.getElementById("month_year");
const days_container = document.getElementById("days");
const next_month = document.getElementById("next");
const prev_month = document.getElementById("prev");
let month_control = 1;

prev_month.onclick = function(){
    
}

let current_date = new Date();
let today = new Date();

function show_month(date){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemeber", "October", "November", "December"];
    const year = date.getFullYear();
    const month = date.getMonth();
    const first_day = new Date(year, month, 1).getDate();
    const last_day = new Date(year, month+1, 0).getDate();

    month_year.textContent = `${months[month]} ${year}`;

    //current month's dates
    for(let i = 1; i <= last_day; i++){
        const day_div = document.createElement("div");
        day_div.textContent = `${i}`;
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()){
            day_div.classList.add("today");
        }
        days_container.appendChild(day_div);
    }
}
show_month(current_date);
