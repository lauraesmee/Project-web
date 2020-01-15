function validateEmailForgottenPassword(emailField) {
    // e-mailadres mag alleen letters, cijfers, punten, of lage streepjes hebben. Moet een @ bevatten en een .
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var sentBtn = document.getElementsByClassName("sent")[0];
    if (reg.test(emailField.value) == false) {
        //als email invalide is, dan kleurt de balk rood en wordt de verzendbutton gedisabled.
        emailField.style.backgroundColor = "rgb(255, 149, 132)";
        sentBtn.disabled = true;
        return false;
    }
    else {
        // als email valide is, kleurt de balk groen en is de button niet meer disabled.
        emailField.style.backgroundColor = "rgb(210, 255, 197)";
        sentBtn.disabled = false;
        return true;
    }
}

//https://www.w3schools.com/howto/howto_css_modals.asp

//Modal verschijnt wanneer de gebruiker op wachtwoord vergeten heeft geklikt. Hier staat de input in om je emailadres in te vullen voor je vergeten wachtwoord.
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};