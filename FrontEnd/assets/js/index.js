const url = "http://localhost:5678/api/";
const urlworks = "http://localhost:5678/api/works";

const urlcategory = "http://localhost:5678/api/categories";
const idFiltre = document.getElementById("filtres");
console.log("works")


const gallery = document.getElementById("gallery");
const sectionPortfolio = document.getElementById("portfolio");

const getWorks = async () => {
    await fetch(urlworks)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Erreur dans la récupération des données de l'API");
            }

        })
        .then(function (data) {
            console.log(data)
            data.forEach((project) => { 

                createProject(project);                        
            
            });              
        })
        .catch((error) => {
            console.log(error);

        });

}

// Fonction pour créer un projet dans la galerie
function createProject(project) {
    console.log(project)
    const figureProject = document.createElement("figure");
    figureProject.setAttribute("data-tag", project.category.name);
    figureProject.setAttribute("data-id", project.categoryId);

    const imageProject = document.createElement("img");
    imageProject.src = project.imageUrl;
    imageProject.alt = project.title;

    const figcaptionProject = document.createElement("figcaption");
    figcaptionProject.innerText = project.title;

    idByCategory(project.category.name);

    figureProject.appendChild(imageProject);
    figureProject.appendChild(figcaptionProject);
    gallery.appendChild(figureProject);
};



getWorks()

const getCategories = async () => {
    await fetch(urlcategory)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Erreur dans la récupération des données de l'API");
            }

        })
        .then(function (data) {
            console.log(data)
            data.forEach((projects) => { 
              buttonFilter(projects)
              
            });              
        })
        .catch((error) => {
            console.log(error);

        });

}
function buttonFilter(project) {
    console.log(project)
    
    const flitreBtn = document.createElement("button");
    flitreBtn.id= "idbtn"
    flitreBtn.classList.add("filter");
    flitreBtn.setAttribute("data-tag", project.name);
    flitreBtn.setAttribute("data-id", project.id);
    flitreBtn.innerText = project.name;
    idFiltre.appendChild(flitreBtn);

    flitreBtn.addEventListener("click", () => {
        idByCategory(project);

})}
    

getCategories();

let tritous = document.querySelector(".filter");

 tritous.addEventListener("click", function () {
    
    console.log("tri")

});
const flitreBtns = document.getElementById("#idbtn")



      

    function idByCategory(id){
    console.log(Object.values(urlworks).filter( work => work.id === id));
}  






