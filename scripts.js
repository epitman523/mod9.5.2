'use strict';

function getDogImages() {
    //3) get number user entered
    let userNumber = $('input').val();
    if (!userNumber) {
        userNumber = 3;
    }
    //4) add number to end of url string
    let doggieURL = 'https://dog.ceo/api/breeds/image/random/' + userNumber;
    //5) Use fetch to access Dog API
    fetch(doggieURL)
        .then(response => response.json())
        //6) Console.log returned images
        .then(responseJSON => console.log(responseJSON))
        .catch(error => console.log('Something went wrong'));
}

//1) User submits form
function watchDogForm() {
    $('form').submit(event => {
        //2) prevent default
        event.preventDefault();
        getDogImages();
    });
}
$(function () {
    watchDogForm();
});