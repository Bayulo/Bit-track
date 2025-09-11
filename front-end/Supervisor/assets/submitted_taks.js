const mark = document.querySelectorAll(".mark");
const grade = document.getElementById("grade");
const errors = document.querySelector(".errors");

mark.forEach(item => {
    item.onkeyup = function(){
        let current_input = item.value;
        if(current_input > 100){
            errors.textContent = "mark must be less than 100";
        }
        if(current_input < 0){
            errors.textContent = "Sah Sir.... have mercy too nah.. mark must be greater than 0";
        }
        if(current_input >= 80 && current_input <= 100){
            grade.textContent = "A";
            errors.textContent = "";
        }
        if(current_input >= 70 && current_input < 80){
            grade.textContent = "B+";
            errors.textContent = "";
        }
        if(current_input >= 60 && current_input < 69){
            grade.textContent = "B";
            errors.textContent = "";
        }
        if(current_input >= 50 && current_input < 60){
            grade.textContent = "C";
            errors.textContent = "";
        }
        if(current_input >= 30 && current_input < 50){
            grade.textContent = "D";
            errors.textContent = "";
        }
        if(current_input >= 0 && current_input < 30){
            grade.textContent = "F";
            errors.textContent = "";
        }
    }
});

//back blur functions
const back_blur = document.getElementById("back_blur");
back_blur.onclick = function(){
    hide_back_blur();
}
function hide_back_blur(){
    back_blur.style.display = "none";
    hide_evaluate_pop();
}
function show_back_blur(){
    back_blur.style.display = "block";
}

//evaluate_pop functions
const evaluate_pop = document.querySelector(".evaluate_pop");
const evaluate_buttons = document.querySelectorAll(".evaluate_button");
evaluate_buttons.forEach(item => {
    item.onclick = function(){
        evaluate_pop.style.display = "flex";
        show_back_blur();
    }
});

function hide_evaluate_pop(){
    evaluate_pop.style.display = "none";
}
const evaluate_pop_close = document.getElementById("evaluate_pop_close");
evaluate_pop_close.onclick = function(){
    hide_evaluate_pop();
    hide_back_blur();
}