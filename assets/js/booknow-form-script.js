const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const doa = document.getElementById('doa');
const dod = document.getElementById('dod');

let firstNameFail = false;
let lastNameFail = false;
let emailFail = false;
let phoneFail = false;
let doaFail = false;
let dodFail = false;

form.addEventListener('submit', (e) => {
    firstNameFail = false;
    lastNameFail = false;
    emailFail = false;
    phoneFail = false;
    doaFail = false;
    dodFail = false;
    e.preventDefault();
    checkInputs(); 
    if (!firstNameFail && !lastNameFail & !emailFail && !phoneFail && !doaFail && !doaFail) {
        console.log('ALL GOOD');
        submitForm();
    }
}) 

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const doaValue = doa.value.trim();
    const dodValue = doa.value.trim();

    if(firstNameValue === '') {
        firstNameFail = true;
        setErrorFor(firstName, 'First name cannot be blank');
    }  else {
        firstNameFail = false;
        setSuccessFor(firstName);
    }

    if(lastNameValue === '') {
        lastNameFail = true;
        setErrorFor(lastName, 'Last name cannot be blank');
    }  else {
        lastNameFail = false;
        setSuccessFor(lastName);
    }

    if(emailValue === '') {
        emailFail = true;
        setErrorFor(email, 'Email cannot be blank');
    }  else {
        emailFail = false;
        setSuccessFor(email);
    }

    if(phoneValue === '') {
        phoneFail = true;
        setErrorFor(phone, 'Phone number cannot be blank');
    }  else {
        phoneFail = false;
        setSuccessFor(phone);
    }

    if(doaValue === '') {
        doaFail = true;
        setErrorFor(doa, 'Doa cannot be blank');
    }  else {
        doaFail = false;
        setSuccessFor(doa);
    }
    
    if(dodValue === '') {
        dodFail = true;
        setErrorFor(dod, 'Dod cannot be blank');
    }  else {
        dodFail = false;
        setSuccessFor(dod);
    }
}

function setErrorFor(input, message) {
    if(input == doa || input == dod) {
        var formControl = input.parentElement.parentElement.parentElement;
    } else {
        var formControl = input.parentElement.parentElement;
    }
    const small = formControl.querySelector('small');
    small.innerText =  message;
    formControl.className = 'form-group  row error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement.parentElement;
    formControl.className = 'form-group  row success';
}


function submitForm(){
    var firstName = $("#firstName").val();
    var lastName=$("#lastName").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var noOfAdults = $("#noOfAdults").val();
	var noOfKids = $("#noOfKids").val();
    var DOA = $("#DOA").val();
    var DOD = $("#DOD").val();
    $.ajax({
        type: "POST",
        url: "../assets/php/booknow-form-process.php",
        data: "&firstName=" + firstName + "&lastName="+ lastName + "&email=" + email + "&phone=" + phone + "&noOfAdults=" + noOfAdults + "&noOfKids=" + noOfKids  + "&DOA=" + DOA + "&DOD=" + DOD,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
            }
       }
    });
}

function formSuccess(){
    $("#booknowform")[0].reset();
}
