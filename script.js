const settingsmenu = document.querySelector(".settings-menu");
const darkBtn = document.querySelector("#dark-btn");



const fn = ()=>{
settingsmenu.classList.toggle(".settings-menu-height")
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
}
