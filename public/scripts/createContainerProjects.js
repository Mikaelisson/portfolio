function createContainerProjects() {
  let containerProjects = document.querySelector(".container-projects");

  projects.forEach((i) => {
    containerProjects.innerHTML += `

        <div class="project">

            <img src="${i.img}" alt="pré visualização do site">

            <div class="project-description">

                <h1>${i.title}</h1>
                <p>${i.description}</p>
                <a href="${i.link}" target="_blank">VISUALIZAR</a>

            </div><!--project-description-->
        </div><!--project-->
        `;
  });
}
