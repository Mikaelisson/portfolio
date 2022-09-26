let hiddenMenu = document.querySelector("#checkbox-menu");

hiddenMenu.addEventListener("click", () => {
  let sidebarContainer = document.querySelector(".sidebar-container");

  sidebarContainer.classList.toggle("activeMenu");
});