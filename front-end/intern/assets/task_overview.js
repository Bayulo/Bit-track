const perform_task_button = document.querySelectorAll(".perform_task_button");
const close_perform_window = document.getElementById("close_button_wrapper");
const perform_popup = document.getElementById("perform_popup");
const dark_background = document.getElementById("dark_background");

perform_task_button.forEach(item => {
    item.onclick = function(){
        dark_background.style.display = "block";
        perform_popup.style.display = "flex";
    }
});
close_perform_window.onclick = function(){
    hide_background();
}
dark_background.onclick = function(){
    hide_background();
}

function hide_background(){
    dark_background.style.display = "none";
    perform_popup.style.display = "none";
}