const url ="http://localhost:5678/api/"
const urlworks = "http://localhost:5678/api/works";

const urlcategory = "http://localhost:5678/api/categories";
console.log("works")


const container = document.getElementById("gallery")
const portfolio = document.getElementById("portfolio")

const getportefolio = async () => {
    await fetch (urlworks) 
    .then(function (response){
        return response.json()

    })
    .then(function(data){
        console.log(data)
        for(prod in data)
        container.innerHTML += `<figure>
        <img src="${data[prod].imageUrl}" alt="Abajour Tahina">
        <figcaption>${data[prod].title}</figcaption>
    </figure>`
    })

}
getportefolio()

// elements pour flitres.
