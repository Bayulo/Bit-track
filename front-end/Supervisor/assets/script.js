
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
        settings_display.style.display = "flex"
        personal_summary_display.style.display = "none"
    }
});

//responsive nav bar behaviour
let global_menu_toggle = 0;
const responsive_nav_button = document.getElementById("menu_button");
const hidden_icons = document.querySelectorAll(".show_on_mobile");
const responsive_nav_bar = document.getElementById("responsive_nav");
const menu_icon = document.getElementById("icon");

function show_menu(){
    global_menu_toggle = 1;
    menu_icon.setAttribute("src", "/front-end/Supervisor/assets/images/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png");
    responsive_nav_button.style.marginLeft = "1.5rem";
    hidden_icons.forEach(item => {
        item.style.display = "block";
    });
    responsive_nav_bar.style.zIndex = "2";
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
    responsive_nav_bar.style.zIndex = "auto";
    responsive_nav_bar.style.padding = "1rem";
    responsive_nav_bar.style.width = "auto";
    responsive_nav_bar.style.minWidth = "auto";
    responsive_nav_bar.style.position = "static";
    responsive_nav_bar.style.height = "auto";
    hide_back_blur();
    global_menu_toggle = 0;
}

responsive_nav_button.onclick = function(){
    if(global_menu_toggle == 0){
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
    back_blur.style.zIndex = "1";
}
function hide_back_blur(){
    back_blur.style.display = "none";
    back_blur.style.zIndex = "auto";
}
back_blur.onclick = function(){
    hide_menu();
    hide_create_task_pop();
    hide_profile_pop();
    hide_assigned_interns_pop();
    hide_announcements_pop();
    hide_new_announcements_pop();
}

//create task pop up button functions 

//open
const create_task_pop = document.getElementById("create_task_pop");
const create_task_dash = document.getElementById("create_task_dash");
create_task_dash.onclick = function(){
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
    create_task_pop.style.display = "none";
}

// profile view pop up functions
//open
const profile_button = document.getElementById("profile");
const profile_view_pop = document.getElementById("profile_view_pop");
profile_button.onclick = function(){
    profile_view_pop.style.display = "flex";
    show_back_blur();
}

//close
const profile_view_pop_close = document.getElementById("profile_view_pop_close");
profile_view_pop_close.onclick = function(){
    hide_profile_pop();
    hide_back_blur();
}
function hide_profile_pop(){
    profile_view_pop.style.display = "none";
}

//assigned interns pop up functions
const assigned_interns_pop = document.getElementById("assigned_interns_pop");
const assigned_interns_dash = document.getElementById("assigned_interns_dash");
const assigned_interns_pop_close = document.getElementById("assigned_interns_pop_close");
assigned_interns_dash.onclick = function(){
    assigned_interns_pop.style.display = "flex";
    show_back_blur();
}
assigned_interns_pop_close.onclick = function(){
    hide_assigned_interns_pop();
    hide_back_blur();
}
function hide_assigned_interns_pop(){
    assigned_interns_pop.style.display = "none";
}

//announcements_pop functions
const announcements_pop = document.getElementById("announcements_pop");
const announcements_dash = document.getElementById("announcements_dash");
const announcements_pop_close = document.getElementById("announcements_pop_close");
announcements_dash.onclick = function(){
    announcements_pop.style.display = "flex";
    show_back_blur();
}
announcements_pop_close.onclick = function(){
    hide_announcements_pop();
}
function hide_announcements_pop(){
    announcements_pop.style.display = "none";
    hide_back_blur();
}


//new announcements pop
const new_announcements_pop_close = document.getElementById("new_announcements_pop_close");
const new_announcements_button = document.getElementById("new_announcements_button");
const new_announcements_pop = document.getElementById("new_announcements_pop");

new_announcements_button.onclick = function(){
    new_announcements_pop.style.display = "flex";
    show_back_blur();
}
new_announcements_pop_close.onclick = function(){
    hide_new_announcements_pop();
    hide_announcements_pop();
}
function hide_new_announcements_pop(){
    new_announcements_pop.style.display = "none";
}
//settings functions

//font toggle function
//onclick of any of the font buttons, walk through the button list and deactivate any previously activated font
//then activated the clicked button
const all_font_buttons = document.querySelectorAll(".setting_select_button_font");
all_font_buttons.forEach(item =>{
    item.onclick = function(){
        //ui toggle logic
        all_font_buttons.forEach(font_button => {
            if(font_button.classList.contains("active_font")){
            font_button.classList.remove("active_font");
        }
        });
        item.classList.add("active_font");

        //actual font changing logic
        if(item.classList.contains("")){
            const root = document.documentElement;
            root.style.setProperty("font-family","")
        }
        if(item.classList.contains("")){
            const root = document.documentElement;
            root.style.setProperty("font-family","")
        }
        if(item.classList.contains("")){
            const root = document.documentElement;
            root.style.setProperty("font-family","")
        }
        if(item.classList.contains("")){
            const root = document.documentElement;
            root.style.setProperty("font-family","")
        }
        if(item.classList.contains("")){
            const root = document.documentElement;
            root.style.setProperty("font-family","")
        }
    }
})

//colour toggle function;same logic as above
const all_colour_buttons = document.querySelectorAll(".setting_select_button_color");
all_colour_buttons.forEach(item =>{
    item.onclick = function(){
        //ui toggle logic
        all_colour_buttons.forEach(colour_button => {
            if(colour_button.classList.contains("active_colour")){
            colour_button.classList.remove("active_colour");
        }
        });
        item.classList.add("active_colour");

        //actual color changing logic
        const root = document.documentElement;
        if(item.classList.contains("default_color")){
            root.style.setProperty("--background_color", "#721A14");
            root.style.setProperty("--body_background_color", "#ffdddb");
            root.style.setProperty("--hover_color", "#e1372b");
            root.style.setProperty("--content_modified_color", "white");
        }
        if(item.classList.contains("blue_color")){
            root.style.setProperty("--background_color", "black");
            root.style.setProperty("--body_background_color", "white");
            root.style.setProperty("--hover_color", "white");
            root.style.setProperty("--content_modified_color", "blue");
        }
        if(item.classList.contains("green_color")){
            root.style.setProperty("--background_color", "");
            root.style.setProperty("--body_background_color", "");
            root.style.setProperty("--hover_color", "");
            root.style.setProperty("--content_modified_color", "");
        }
        if(item.classList.contains("orange_color")){
            root.style.setProperty("--background_color", "");
            root.style.setProperty("--body_background_color", "");
            root.style.setProperty("--hover_color", "");
            root.style.setProperty("--content_modified_color", "");
        }
    }
})