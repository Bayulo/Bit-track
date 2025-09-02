// Global toggle variable
let isOpen = false;

function show_menu(){
    const icon = document.getElementById("open_close_nav");
    const items = document.querySelectorAll(".view_on_mobile");
    const responsive_nav = document.getElementById("responsive_nav");

    icon.setAttribute("src", "/front-end/intern/assets/images/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
    items.forEach(item => {item.style.display = "block"; item.style.height = "6vh"});
    responsive_nav.style.width = "48vw";
    responsive_nav.style.position = "absolute";
}

function hide_menu(){
    const icon = document.getElementById("open_close_nav");
    const items = document.querySelectorAll(".view_on_mobile");
    const responsive_nav = document.getElementById("responsive_nav");

    icon.setAttribute("src", "/front-end/intern/assets/images/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
    items.forEach(item => item.style.display = "none");
    responsive_nav.style.width = "15vw";
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

function showCalendar(){
    const log_book_follow = document.getElementById("log_book_follow_up");
    log_book_follow.style.display = "flex";
    popup_is_open = true;
    popupBackground();
    hide_menu();
}

function closeCalendar(){
    popup_is_open = false;
    const log_book_follow = document.getElementById("log_book_follow_up");
    log_book_follow.style.display = "none";
    popupBackground();
}

function showTasks(){
    const tasks_view = document.getElementById("tasks_view");
    tasks_view.style.display = "flex";
    popup_is_open = true;
    popupBackground();
    hide_menu();
}

function closeTasks(){
    popup_is_open = false;
    const tasks_view = document.getElementById("tasks_view");
    tasks_view.style.display = "none";
    popupBackground();
}

function showNewAnnouncements(){
    const new_announcements_pop = document.getElementById("new_announcements_pop");
    new_announcements_pop.style.display = "flex";
    popup_is_open = true;
    popupBackground();
    hide_menu();
}

function hideNewAnnouncements(){
    popup_is_open = false;
    const new_announcements_pop = document.getElementById("new_announcements_pop");
    new_announcements_pop.style.display = "none";
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

//Calendar
const internship_start = new Date(2025, 7, 1); //That is; 2025 August 1st (to be amended)
const internship_stop = new Date(2025, 8, 30); //That is;  2025 September 30th (to be amended)
const month_year = document.getElementById("month_year");
const days_container = document.getElementById("days");
const next_month_button = document.getElementById("next");
const prev_month_button = document.getElementById("prev");


let current_date = new Date();
let today = new Date();

function show_login_for_specific_date(){
    const attendance = document.querySelectorAll(".internship_span");
    attendance.forEach(item => {
        item.addEventListener('click', function(){
            console.log("you can view attendace for today: "+ item.dataset.id );
        });
    });
}


document.addEventListener("DOMContentLoaded", function (){
    function show_month(date){
        days_container.innerHTML = ""; 
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const year = date.getFullYear();
        const month = date.getMonth();
        const first_day = new Date(year, month, 1).getDay();
        const last_day = new Date(year, month+1, 0).getDate();

        month_year.textContent = `${months[month]} ${year}`;
        
        //previous month's dates
        const prev_Month_last_day = new Date(year, month, 0).getDate();
        for(let i = first_day-1; i > 0; i--){
            const day_div = document.createElement("div");
            day_div.textContent = prev_Month_last_day - i + 1;
            day_div.classList.add("fade");
            days_container.appendChild(day_div);
        }

        //current month's dates
        for(let i = 1; i <= last_day; i++){
            const day_div = document.createElement("div");
            const this_date = new Date(year, month, i);
            day_div.setAttribute("data-id", `${[i,months[month],year]}`);
            day_div.textContent = `${i}`;
            //indicate internship span
            if (this_date >= internship_start && this_date <= internship_stop){
                day_div.classList.add("internship_span");
                show_login_for_specific_date();
            }
            //indicate today
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()){
                day_div.classList.add("today");
            }

            days_container.appendChild(day_div);
        }
        //next month's dates
        const next_month_start_day = 7 - new Date(year, month + 1, 0).getDay()-1;
        for(let i = 1; i <= next_month_start_day; i++){
            const day_div = document.createElement("div");
            day_div.textContent = i;
            day_div.classList.add("fade");
            days_container.appendChild(day_div);
        }
    }   
    //full previous month
    prev_month_button.addEventListener("click", function () {
        current_date.setMonth(current_date.getMonth() - 1);
        show_month(current_date);
    });

    //full next month
    next_month_button.addEventListener("click", function () {
        current_date.setMonth(current_date.getMonth() + 1);
        show_month(current_date);
    });
    show_month(current_date);
});

const button_dashboard = document.querySelectorAll(".button_dashboard");
const button_interns = document.querySelectorAll(".button_interns");
const button_settings = document.querySelectorAll(".button_settings");
const button_announcements = document.querySelectorAll(".button_announcements");

const dashboard_info = document.getElementById("info_per_nav_item_dashboard");
const fellow_interns_info = document.getElementById("info_per_nav_item_fellow_interns");
const settings_info = document.getElementById("info_per_nav_item_settings");
const announcements_info = document.getElementById("info_per_nav_item_annoncements");

button_dashboard.forEach(item => item.addEventListener("click", function(){
    dashboard_info.style.display = "flex";
    fellow_interns_info.style.display = "none";
    settings_info.style.display = "none";
    announcements_info.style.display = "none";
}));
button_interns.forEach(item => item.addEventListener("click", function(){
    dashboard_info.style.display = "none";
    fellow_interns_info.style.display = "flex";
    settings_info.style.display = "none";
    announcements_info.style.display = "none";
}));
button_settings.forEach(item => item.addEventListener("click", function(){
    dashboard_info.style.display = "none";
    fellow_interns_info.style.display = "none";
    settings_info.style.display = "flex";
    announcements_info.style.display = "none";
}));
button_announcements.forEach(item => item.addEventListener("click", function(){
    dashboard_info.style.display = "none";
    fellow_interns_info.style.display = "none";
    settings_info.style.display = "none";
    announcements_info.style.display = "flex";
}));