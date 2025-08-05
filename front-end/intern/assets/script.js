function showNavbar(){
    const navBar = document.querySelector("#side_nav_bar");
    navBar.style.display = "inline-block";
    navBar.style.width = "29vw";
    document.querySelector("#side_nav_bar li").style.width = "28vw";
    const responsive_nav = document.querySelector("#responsive_nav");
    responsive_nav.style.display = "none";
}