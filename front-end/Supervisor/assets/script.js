
//getting and swapping of views for various pages
//getting pages
const dashboard_display = document.getElementById("nav_option_dashboard_display");
const intern_details_display = document.getElementById("nav_option_intern_details_display");
const announcements_display = document.getElementById("nav_option_announcements_display");
const settings_display = document.getElementById("nav_option_settings_display");
const personal_summary_display = document.getElementById("nav_option_personal_summary_display");
//getting buttons
const dashboard_button = document.querySelectorAll(".nav_options_dashboard");
const intern_details_button = document.querySelectorAll(".nav_options_intern_details");
const announcements_button = document.querySelectorAll(".nav_options_announcements");
const personal_summary_button = document.querySelectorAll(".nav_options_personal_summary");
const settings_button = document.querySelectorAll(".nav_options_settings");

//swapping
dashboard_button.forEach(item => {
    item.onclick = function(){
        dashboard_display.style.display = "flex"
        intern_details_display.style.display = "none"
        announcements_display.style.display = "none"
        settings_display.style.display = "none"
        personal_summary_display.style.display = "none"
    }
});
intern_details_button.forEach(item => {
    item.onclick = function(){
        dashboard_display.style.display = "none"
        intern_details_display.style.display = "block"
        announcements_display.style.display = "none"
        settings_display.style.display = "none"
        personal_summary_display.style.display = "none"
        hide_menu();
    }
});
announcements_button.forEach(item => {
    item.onclick = function(){
        dashboard_display.style.display = "none"
        intern_details_display.style.display = "none"
        announcements_display.style.display = "block"
        settings_display.style.display = "none"
        personal_summary_display.style.display = "none"
    }
});
personal_summary_button.forEach(item => {
    item.onclick = function(){
        dashboard_display.style.display = "none"
        intern_details_display.style.display = "none"
        announcements_display.style.display = "none"
        settings_display.style.display = "none"
        personal_summary_display.style.display = "block"
    }
});
settings_button.forEach(item => {
    item.onclick = function(){
        dashboard_display.style.display = "none"
        intern_details_display.style.display = "none"
        announcements_display.style.display = "none"
        settings_display.style.display = "block"
        personal_summary_display.style.display = "none"
    }
});

//responsive nav bar behaviour
let global_toggle = 0;
const responsive_nav_button = document.getElementById("menu_button");
const hidden_icons = document.querySelectorAll(".show_on_mobile");
const responsive_nav_bar = document.getElementById("responsive_nav");
const menu_icon = document.getElementById("icon");

function show_menu(){
    global_toggle = 1;
    menu_icon.setAttribute("src", "/front-end/Supervisor/assets/images/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
    responsive_nav_button.style.marginLeft = "1.5rem";
    hidden_icons.forEach(item => {
        item.style.display = "block";
    });
    responsive_nav_bar.style.padding = "0";
    responsive_nav_bar.style.paddingTop = "10px";
    responsive_nav_bar.style.width = "15rem";
    responsive_nav_bar.style.minWidth = "170px";
    responsive_nav_bar.style.position = "absolute";
    responsive_nav_bar.style.height = "84vh";
    responsive_nav_bar.style.boxShadow = "0px 0px 0px";
    show_back_blur();
}

function hide_menu(){
    menu_icon.setAttribute("src", "/front-end/Supervisor/assets/images/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
    responsive_nav_button.style.marginLeft = "0";
    hidden_icons.forEach(item => {
        item.style.display = "none";
    });
    responsive_nav_bar.style.padding = "1rem";
    responsive_nav_bar.style.width = "auto";
    responsive_nav_bar.style.minWidth = "auto";
    responsive_nav_bar.style.position = "static";
    responsive_nav_bar.style.height = "auto";
    hide_back_blur();
    global_toggle = 0;
}

responsive_nav_button.onclick = function(){
    if(global_toggle == 0){
        show_menu();
    }
    else{
        hide_menu();
    }
}

//backdrop fucntionalities
const back_blur = document.getElementById("back_blur");
function show_back_blur(){
    back_blur.style.display = "block";
}
function hide_back_blur(){
    back_blur.style.display = "none";
}
back_blur.onclick = function(){
    hide_menu();
    hide_create_task_pop();
}

//create task pop up button functions 

//open
const create_task_dash = document.getElementById("create_task_dash");
create_task_dash.onclick = function(){
    const create_task_pop = document.getElementById("create_task_pop");
    show_back_blur();
    create_task_pop.style.display = "flex";
}

//add resources
let count = 1;
const add_resource_button = document.getElementById("add_resource_button");
add_resource_button.onclick = function(){
    count++;
    if(count < 6){ //ensure max resources == 5
        let resources_holder = document.getElementById("task_resource_sub_wrapper");
        resources_holder.innerHTML+= `<input type="text" id="task_resource">`;
    }
}
//close
const create_task_pop_close = document.getElementById("create_task_pop_close");
create_task_pop_close.onclick = function(){
    hide_create_task_pop();
    hide_back_blur();
}
function hide_create_task_pop(){
    const create_task_pop = document.getElementById("create_task_pop");
    create_task_pop.style.display = "none";
}