
let informations = [
    {
        h1: "Formação Acadêmica",
        p1: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        p2: "UNINOVE | Conclusão: 07/2023",
    },{
        h1: "Complementar",
        p1: "Desenvolvimento Web",
        p2: "Full Stack <br> Programador BR",
    },{
        h1: "Complementar",
        p1: "Desenvolvimento Web",
        p2: "HTML | CSS | Bootstrap | Lógica de Programação <br> Digital Innovation One",
    },{
        h1: "Complementar",
        p1: "Responsividade e Experiência do Usuário",
        p2: "Digital Innovation One",
    },
]


function createAdditionalInformation(){

    let additional = document.querySelector(".additional");

    informations.forEach((i)=>{


        let divFormation = document.createElement('div');
        divFormation.classList.add('formation');
    
        let h1 = document.createElement('h1');
        h1.innerHTML = i.h1;
        let p1 = document.createElement('p');
        p1.innerHTML = i.p1;
        let p2 = document.createElement('p');
        p2.innerHTML = i.p2;
        let span = document.createElement('span');
    
        divFormation.appendChild(h1);
        divFormation.appendChild(p1);
        divFormation.appendChild(p2);
        divFormation.appendChild(span);
        additional.appendChild(divFormation);
    })


}