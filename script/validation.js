// script qui accèdera à nos input
const form = document.getElementById('form');
const inputPrenom = document.getElementById('inputPrenom');
const inputNom = document.getElementById('inputNom');
const inputEmail = document.getElementById('inputEmail');

// setError fonction qui va mettre en rouge l'input
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

// setSuccess fonction qui va mettre en vert l'input
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// fonction qui va vérifier si l'email est valide
// Fonction retournant true si le format d'une adresse courriel est valide 
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// fonction qui validera le formulaire
const validateForm = () => {
    let noError = true;
    const prenomInputValue = inputPrenom.value.trim();
    const nomInputValue = inputNom.value.trim();
    const emailInputValue = inputEmail.value.trim();

    if (prenomInputValue === '') {
        setError (inputPrenom, 'Le prénom est requis')
        noError = false
    } else {
        setSuccess (inputPrenom)
    }

    if (nomInputValue === '') {
        setError (inputNom, 'Le nom est requis')
        noError = false
    } else {
        setSuccess (inputNom)
    }


    if (emailInputValue === '') {
        setError (inputEmail, 'Un Email est requis')
        noError = false
    } else if (!isValidEmail(emailInputValue)) {
        setError (inputEmail, 'Provide valid email address')
        noError = false
    } else {
        setSuccess (inputEmail)
    }

    return noError;
}