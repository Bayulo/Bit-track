const announcement_date = document.getElementById("announcement_date");
const announcement_time = document.getElementById("announcement_time");
const announcement_author = document.getElementById("announcement_author");

let today = new Date();
announcement_date.textContent = today.toDateString();
today.getHours();
today.getMinutes();
announcement_time.innerHTML = `${today.getHours()}:${today.getMinutes()}`
announcement_author.textContent = "Mr. Me";