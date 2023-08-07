const url = "http://localhost:5678/api/";
const urlworks = "http://localhost:5678/api/works";

const urlcategory = "http://localhost:5678/api/categories";
const filtres = document.getElementById("filtres");
//console.log("works")


const gallery = document.getElementById("gallery");
const sectionPortfolio = document.getElementById("portfolio");
const modif = document.querySelector(".modif");
const modif2 = document.querySelector(".modif2");
const H2 = document.querySelector(".titre");


async function main() {
    await getWorks();
    await getCategories()


}

main()



async function getWorks(categoryId) {
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

            //on vide les galleries
            gallery.innerHTML = "";

            data.forEach((project) => {

                if (categoryId == project.category.id || categoryId == null) {
                    createProject(project);                
                }
                
                

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

    //idByCategory(project.category.name);

    figureProject.appendChild(imageProject);
    figureProject.appendChild(figcaptionProject);
    gallery.appendChild(figureProject);

};




async function getCategories() {
    await fetch(urlcategory)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Erreur dans la récupération des données de l'API");
            }

        })
        .then(function (categories) {
            console.log(categories)
            categories.forEach((categorie) => {
                buttonFilter(categorie)

            });
        })
        .then(() => {
            //on récupère les boutons
            const buttons = document.querySelectorAll("#filtres .filter");
      
            buttons.forEach((button) => {
              //Pour chaque bouton, au clic
              button.addEventListener("click", function () {
                // Get (et Affiche le data-tag)
                let buttonTag = button.getAttribute("data-tag");
                console.log(buttonTag);
      
                //Get catégorie id
                let categorieId = button.getAttribute("data-id");
                console.log(categorieId);
      
                //on enlève, pour chaque bouton la classe is-active
                buttons.forEach((button) => button.classList.remove("is-active"));
                //puis on ajoute la classe active au bouton cliqué
                this.classList.add("is-active");
                // On récupère les works de l'API en fonction des categories
                getWorks(categorieId);
              });
            });
          })
        .catch((error) => {
            console.log(error);

        });

}
function buttonFilter(categorie) {
    console.log(categorie)

    const flitreBtn = document.createElement("button");
    
    flitreBtn.classList.add("filter");
    flitreBtn.setAttribute("data-tag", categorie.name);
    flitreBtn.setAttribute("data-id", categorie.id);
    flitreBtn.innerText = categorie.name;
    filtres.appendChild(flitreBtn);

}




var token = sessionStorage.getItem("token");
    if ( token ) {
        filtres.style.display ="none";
        gallery.style.paddingTop = " 75px";
        modif.style.display = "inline-block";
        modif2.style.display = "block";
        H2.style.paddingLeft = " 14px ";

    console.log(token);

    }
    else ; {
        
    };
  
