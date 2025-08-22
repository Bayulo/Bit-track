const the_date = document.getElementById("the_date");
const the_time = document.getElementById("the_time");

let d = new Date();
the_date.textContent = d.toDateString();
let hours = d.getHours();
let minutes = d.getMinutes();
if(d.getMinutes()<10){
    the_time.innerHTML += `${hours}:0${minutes}`;
}
the_time.innerHTML += `${hours}:${minutes}`;