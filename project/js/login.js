// Validate e-mail input
// https://stackoverflow.com/questions/7635533/validate-email-address-textbox-using-javascript/7635734
function validateEmail(emailField) {
    // e-mailadres mag alleen letters, cijfers, punten, of lage streepjes hebben. Moet een @ bevatten en een .
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // haalt de class op met info-text
    var emailstatus = document.getElementsByClassName("info-text")[0];
    if (reg.test(emailField.value) == false) {
        // als het emailadres niet valide is, kleurt de balk rood. Wordt de h2 gevuld met een image en text
        emailField.style.backgroundColor = "rgb(255, 149, 132)";
        emailstatus.innerHTML = "<img class='check-email' src='img/alert.svg' alt='Check'> Dit is geen valide e-mailadres";
        emailstatus.style.display = "inline-block";
        // Variabele wordt hier gedeclareerd, omdat element nu pas bestaat
        var checkMail = document.getElementsByClassName("check-email")[0];
        // wordt class alert toegevoegd om een css animatie te starten
        checkMail.classList.add("alert");
        setTimeout(function() {
            // class wordt na 750ms verwijdert
            checkMail.classList.remove('alert');
        }, 750);
        return false;
    }
    else {
        // als email valide is, dan kleurt de balk groen en verder niets.
        emailField.style.backgroundColor = "rgb(210, 255, 197)";
        emailstatus.innerHTML = "";
        emailstatus.style.display = "none";
        return true;
    }
}