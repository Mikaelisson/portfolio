const produtos = [
    {
        id: 1,
        img : "./assets/img/intel.jpg",
        Nome : "Notebook Acer Aspire 5",
        de : 4.199,
        por : 3.499,
    },{
        id: 2,
        img : "./assets/img/ryzen.jpg",
        Nome : "Notebook Ryzen 5",
        de : 4.199,
        por : 3.499,
    },{
        id: 3,
        img : "./assets/img/ryzen7.jpg",
        Nome : "Notebook Ryzen 7",
        de : 4.939,
        por : 3.999,
    },{
        id: 4,
        img : "./assets/img/acer_nitro_5.jpg",
        Nome : "Notebook Acer Nitro 5",
        de : 4.939,
        por : 3.999,
    },{
        id: 5,
        img : "./assets/img/alienware.jfif",
        Nome : "Notebook Gamer Alienware",
        de : 4.939,
        por : 3.999,
    },{
        id: 6,
        img : "./assets/img/Notebook_Gamer_Predator_Helios_300.jfif",
        Nome : "Notebook Gamer Predator Helios 300",
        de : 4.939,
        por : 3.999,
    },{
        id: 7,
        img : "./assets/img/MacBook.jpg",
        Nome : "MacBook Air (de 13 polegadas, Processador M1 da Apple)",
        de : 4.939,
        por : 3.999,
    },{
        id: 8,
        img : "./assets/img/alienware.jfif",
        Nome : "Notebook Gamer Alienware",
        de : 4.939,
        por : 3.999,
    },{
        id: 9,
        img : "./assets/img/Notebook_Gamer_Predator_Helios_300.jfif",
        Nome : "Notebook Gamer Predator Helios 300",
        de : 4.939,
        por : 3.999,
    },{
        id: 10,
        img : "./assets/img/MacBook.jpg",
        Nome : "MacBook Air (de 13 polegadas, Processador M1 da Apple)",
        de : 4.939,
        por : 3.999,
    } ,{
        id: 11,
        img : "./assets/img/ryzen.jpg",
        Nome : "Notebook Ryzen 5",
        de : 4.199,
        por : 3.499,
    },{
        id: 12,
        img : "./assets/img/ryzen7.jpg",
        Nome : "Notebook Ryzen 7",
        de : 4.939,
        por : 3.999,
    },{
        id: 13,
        img : "./assets/img/acer_nitro_5.jpg",
        Nome : "Notebook Acer Nitro 5",
        de : 4.939,
        por : 3.999,
    },{
        id: 14,
        img : "./assets/img/alienware.jfif",
        Nome : "Notebook Gamer Alienware",
        de : 8.700,
        por : 7.999,
    },{
        id: 15,
        img : "./assets/img/intel.jpg",
        Nome : "Notebook Acer Aspire 5",
        de : 4.199,
        por : 3.499,
    }
]


function createProducts(){


    let containerProducts = document.querySelector(".container-products");

    produtos.forEach((i)=>{

        let divProdutos = document.createElement('div');
        divProdutos.classList.add('products');
        containerProducts.appendChild(divProdutos);


        let aProdutos = document.createElement('a');
        aProdutos.href = "#";
        aProdutos.key = i.id
        divProdutos.appendChild(aProdutos)


        let imgProdutos = document.createElement('img');
        imgProdutos.src = i.img;
        aProdutos.appendChild(imgProdutos);

        let pProdutos = document.createElement('p');
        pProdutos.innerHTML = i.Nome;
        aProdutos.appendChild(pProdutos)

        let deProdutos = document.createElement('p')
        deProdutos.classList.add('priceOld');
        deProdutos.innerHTML = `De: R$`+i.de+`,00`;
        aProdutos.appendChild(deProdutos)

        let h2Produtos = document.createElement('h2');
        h2Produtos.innerHTML = `Por: R$`+i.por+`,00`;
        aProdutos.appendChild(h2Produtos);

        let comprarProduto = document.createElement('button')
        comprarProduto.innerHTML = 'COMPRAR';
        aProdutos.appendChild(comprarProduto)
        

    })
}

createProducts();

let bannerCarrousel = document.querySelector(".banner-carrousel")
.addEventListener('wheel', event => {
        if(event.deltaY > 0){
            event.target.scrollBy(300, 0)
        }else{
            event.target.scrollBy(-300, 0)
        }

})

let menu = document.querySelector(".menu")
let hamburguer = document.querySelector("#hamburguer").addEventListener('click', teste)

function teste(){
    menu.classList.toggle('active')
}

