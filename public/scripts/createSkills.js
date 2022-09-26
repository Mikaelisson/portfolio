document.addEventListener('DOMContentLoaded', ()=>{
    createSkill();
    createAdditionalInformation();
    createContainerProjects();
})


let skills = [
    {
        skill: 'HTML',
        level: '90%',
    },{
        skill: 'CSS',
        level: '90%',
    },{
        skill: 'Javascript',
        level: '80%',
    },{
        skill: 'React.JS',
        level: '50%',
    },{
        skill: 'Bootstrap',
        level: '70%',
    },{
        skill: 'Express.js',
        level: '70%',
    },{
        skill: 'MongoDB',
        level: '60%',
    },{
        skill: 'Firebase',
        level: '20%',
    },{
        skill: 'Automação com UiPath',
        level: '60%',
    },
]


function createSkill (){

    let divSkills = document.querySelector(".skills");

    skills.forEach(i=>{

        divSkills.innerHTML += `
            <div class="container-skills">
                <div class="skill">
                    <p>${i.skill}</p>
                    <p class="skill-level-percentage">${i.level}</p>
                </div>
                <div class="skill-level">
                    <span style="width: ${i.level}"></span>
                </div>              
            </div>
        `
    })
};