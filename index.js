let inputFirstName = document.querySelector('#firstName');
let inputLastName = document.querySelector('#lastName');
let button = document.querySelector('button');

let popUp = document.getElementById('popUp');

function messagePopUp() {
    if (inputFirstName.value && inputLastName.value) {
      let firstName = inputFirstName.value;
        popUp.textContent = "Thank you for contacting us, " + firstName + "!";
        popUp.style.display = "block";
    }
    else {
        popUp.style.display = "none";
    }
}


function firstName() {
    if (inputFirstName.value ===''){
        inputFirstName.style.border = '2px solid red'
    }
    else {
        inputFirstName.style.border = '';
    }
}

function lastName() {
    if (inputLastName.value === '') {
        inputLastName.style.border = '2px solid red'
    }
    else {
        inputLastName.style.border = '';
    }
}


button.addEventListener('click', firstName);
button.addEventListener('click', lastName);
button.addEventListener('click', messagePopUp);






