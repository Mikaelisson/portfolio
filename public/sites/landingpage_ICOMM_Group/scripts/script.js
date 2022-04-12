let headerAccount = document.querySelector(".header-account")
  .addEventListener("click", active);

function active() {
  let accountConfig = document.querySelector(".account-config");
  let imgSet = document.querySelector(".img-seta");
  
  accountConfig.classList.toggle("active");
  imgSet.classList.toggle("rotate");

}

const activeSubmenu = document.getElementById("menu");
const Submenu = document.getElementById("submenu");


activeSubmenu.addEventListener("mouseover", () => {
    let i = document.getElementById("submenu");
    i.style.display = "block";
})


activeSubmenu.addEventListener("mouseleave", () => {
    let i = document.getElementById("submenu")
    i.style.display = "none";
})




window.addEventListener("scroll", ()=>{
    const posY = window.pageYOffset;

    let messageDOM = document.querySelector(".message")
    let skipLinksDOM = document.querySelector(".skip-links")

    if(posY >= 200){
        messageDOM.style.display = "none"
        skipLinksDOM.style.display = "none"
    }else{
        messageDOM.style.display = "block"
        skipLinksDOM.style.display = "block"
    }

})


const checkboxMenu = document.getElementById("checkbox-menu")
.addEventListener("click", ()=>{
    let navParent = document.querySelector(".nav-parent")
    navParent.classList.toggle("activeMenu");
})


const BTNbuscar = document.getElementById("buscar");


BTNbuscar.addEventListener("click", ()=>{
    let inputBuscar = document.querySelector(".input-search")
    inputBuscar.classList.toggle("activeInput");
})