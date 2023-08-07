const urlwork = "http://localhost:5678/api/works";

const aLink = document.querySelector("#portfolio a");
const modal1 = document.querySelector("#modal_1");
const closeModal1 = document.querySelector("#modal_close");
const modalGallery = document.getElementsByClassName("#modalGallery");
console.log(modalGallery);



// Fonction pour ouvrir une modale
function openModal(modal) {
    modal.style.display = "flex";
}

// Fonction pour fermer une modale
function closeModal(modal) {
    modal.style.display = "none";
}

// Ouverture de la première modale
aLink.addEventListener('click', function () {
    openModal(modal1);
});

// Fermeture de la première modale
closeModal1.addEventListener('click', function () {
    closeModal(modal1);
});

// Fermeture de la première modale en cliquant en dehors de la fenêtre
window.addEventListener("click", (event) => {
    if (event.target === modal1) {
        closeModal(modal1);
    }
});

// récuperation des projets pour la minigallery 


miniWorks();

async function miniWorks() {
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
                
                
                  modalProject(project);    
                            
        
        }) 
     }) 
     .catch((error) => {
        console.log(error);

    });

} 

function modalProject(project){ 
    const modalGallery = document.getElementsByClassName(".modalGallery");
    console.log(modalGallery);
    
    const figureModal = document.createElement("figure");
    figureModal.classList.add("modal_figure");

    const imageModal = document.createElement("img");
    imageModal.classList.add("modal_works");
    imageModal.src = project.imageUrl;
    imageModal.alt = project.title;

    
    figureModal.appendChild(imageModal);
    modalGallery.appendChild(figureModal);


}

   
        
       
