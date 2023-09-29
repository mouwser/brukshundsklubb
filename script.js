document.getElementById("login-button").addEventListener("click", function() {
    // hämtar username och password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
 
    // kollar om username och password är rätt (i detta fallet Bella och qwe123)
    if (username === "Bella" && password === "qwe123") {
        
        // lagrar i localstorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        // login lyckas gömmer text och input
        document.getElementById("login").style.display = "none";
        document.getElementById("inloggad").style.display = "block";
        document.getElementById("login-confirm").textContent = "Välkommen du är nu inloggad!";
    } else {
        // error om det blir fel
        alert("fel användarnamn/lösenord");
        document.getElementById("error").textContent = "Fel användarnamn eller lösenord!";
    }
});

  // kollar om man redan är inloggad
window.addEventListener("load", function() {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername, storedPassword) {
        // gömmer login input och textrutor
        document.getElementById("login").style.display = "none";
        document.getElementById("inloggad").style.display = "block";
        document.getElementById("login-confirm").textContent = "Välkommen du är nu inloggad!";
    }
});



//logout knapp som tar bort login inputs och loggar ut
document.getElementById("logout").addEventListener("click", function() {

    localStorage.removeItem("username");
    localStorage.removeItem("password");
    document.getElementById("login").style.display = "block";
    document.getElementById("inloggad").style.display = "none";
});

