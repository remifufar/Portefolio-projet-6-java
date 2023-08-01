const login = document.querySelector('form')
console.log("login")

// ECOUTER LE CLICK DU BOUTON
login.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
        
    })
    .then(res => res.json())
    .then(data => {
        if(data.message) {
            document.querySelectorAll("error-message").textContent = "Erreur dans l`identifiant ou le mot de passe"
        } else {
            localStorage.setItem('token', data.token)
            //window.location.replace("./index.html");
        }

        console.log(data);
    })
    .catch
})  
alert( localStorage.getItem('token') );
