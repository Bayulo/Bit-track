//edit page image upload
const image_input = document.getElementById("image_upload");
const picture_display = document.getElementById("picture_change");

image_input.onchange = function change_pic(){
    picture_display.src = URL.createObjectURL(image_input.files[0]);
}