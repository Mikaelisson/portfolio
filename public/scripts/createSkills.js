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
        level: '75%',
    },{
        skill: 'React.JS',
        level: '50%',
    },{
        skill: 'Bootstrap',
        level: '50%',
    },{
        skill: 'Express.js',
        level: '45%',
    },{
        skill: 'MongoDB',
        level: '50%',
    },{
        skill: 'Firebase',
        level: '20%',
    },
]


function createSkill (){

    let divSkills = document.querySelector(".skills");

    skills.forEach(i=>{

        divSkills.innerHTML += `
            <div class="container-skills">
                <div class="skill">
                    <p>${i.skill}</p>
                    <p>${i.level}</p>
                </div>
                <div class="skill-level">
                    <span style="width: ${i.level}"></span>
                </div>              
            </div>
        `
    })
};