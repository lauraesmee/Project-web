//https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
//https://css-tricks.com/making-css-animations-feel-natural/
//https://www.w3schools.com/howto/howto_js_remove_class.asp
//https://catalin.red/removing-an-element-with-plain-javascript-remove-method/
function removeElement(element) {
    var savedstory = element.getElementsByClassName('saved-story')[0];
    savedstory.classList.add('jump');
    setTimeout(function() {
        savedstory.classList.remove('jump');
    }, 1000);

    setTimeout(function() {
        element.remove();
    }, 2000);

};