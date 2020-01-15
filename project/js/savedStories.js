//https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
//https://css-tricks.com/making-css-animations-feel-natural/
//https://www.w3schools.com/howto/howto_js_remove_class.asp
//https://catalin.red/removing-an-element-with-plain-javascript-remove-method/

// Haalt de elementen op met onclick="removeElement(this)" in de html
function removeElement(element) {
    // haalt de elementen op met de class saved-story van het element this.
    var savedstory = element.getElementsByClassName('saved-story')[0];
    // voegt de class jump toe aan saved-story
    savedstory.classList.add('jump');
    setTimeout(function() {
        // class wordt na 1000 ms verwijdert
        savedstory.classList.remove('jump');
    }, 1000);

    setTimeout(function() {
        // element wordt na 2000ms verwijdert
        element.remove();
    }, 2000);

};