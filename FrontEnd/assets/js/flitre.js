


// elements pour flitres
const divFilters = document.createElement("div");
divFilters.classList.add("button_filter");
portfolio.appendChild(divFilters)

// boutton tous.
const buttonWorks = document.createElement("button");
buttonWorks.classList.add("filter");
buttonWorks.innerText = "Tous";
divFilters.appendChild(buttonWorks);



function genererFilter(){

    
for (let i = 0; i < urlcategory.length ; i++){
    
    const buttonFilter = document.createElement("button");
    buttonFilter.classList.add("filter");
    buttonFilter.innerText=""
    divFilters.appendChild(buttonFilter)
     }}

    genererFilter()