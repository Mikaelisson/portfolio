const menu = document.getElementById("menu")

document.addEventListener("DOMContentLoaded", createMenu)

const options = [
    {
        option: "LIQUIDA"
    },{
        option: "WHAT'S NEW"
    },{
        option: "MARCAS"
    },{
        option: "ROUPAS"
    },{
        option: "CALÇADOS"
    },{
        option: "ACESSÓRIOS"
    },{
        option: "CASA & BEAUTÉ"
    },
]

const subMenuOptionsNew = [
    {
        option: ""
    },{
        option: ""
    },{
        option: ""
    },{
        option: ""
    },{
        option: ""
    },{
        option: ""
    }
]


function createMenu (){

    options.forEach((i)=>{
        menu.innerHTML += 
        `
            <li>
                <a href="#" id="active-submenu" class="active-submenu" target="_blank">${i.option}</a>
                <ul id="submenu" class="submenu">
                    <li id="submenu-options">

                    <p class="title-submenu">DESCUBRA DIARIAMENTE AS NOVIDADES DO NOSSO E-SHOPPPING</p>
                                            
                        <ul class="menu1">
                            <li>
                                <a href="#" target="_blank">
                                    NEW IN
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Inverno 22
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Roupas
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Calçados
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Acessórios
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Fitness
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Welcome Labels
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" style="text-decoration:underline">
                                    Ver Tudo
                                </a>
                            </li>
                        </ul>

            
                        <ul class="menu2">
                            <li>
                                <a href="#" target="_blank">
                                    CATEGORY
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Pima Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Denim Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Shop By Look
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Sneaker Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" style="text-decoration:underline">
                                    Ver Tudo
                                </a>
                            </li>
                        </ul>

                        <ul class="pictures-menu">
                            <li>
                                <a href="#" target="_blank">
                                    <img src="./assets/pictures/hoover_whatsnew-masc-01.jpg" alt>
                                    <p>SNEAKER SHOP</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <img src="./assets/pictures/hoover_whatsnew-masc-02.jpg" alt>
                                    <p>SHOP BY LOOK</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <img src="./assets/pictures/hoover_whatsnew-masc-03.jpg" alt>
                                    <p>DENIM SHOP</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <img src="./assets/pictures/hoover_whatsnew-masc-04.jpg" alt>
                                    <p>INVERNO 2022</p>
                                </a>
                            </li>
                        </ul>


                    </li>
                </ul>
            </li>
        `
    })
}






// category: [
//     {
//         option: "Pima Shop"
//       },{
//         option: "Denim Shop"
//       },{
//         option: "Shop By Look"
//       },{
//         option: "Sneaker Shop"
//       },
//   ]

