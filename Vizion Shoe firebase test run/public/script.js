const loginSignUp = document.querySelector('.login-signUp');
const EmailLoginBox = document.querySelector('.Email-login-box');
const signUpPage = document.querySelector('.signUp-page');
const EnterEmailSignInPage = document.getElementById('email');
const BackLoginSignUp = document.querySelectorAll('BackLoginSignUp');
const EnterEmailRegisterPage = document.querySelectorAll('.EmailRegister');



EnterEmailSignInPage.addEventListener('click', () => {
    loginSignUp.style.display = 'none';
    signUpPage.style.display = 'none';
    EmailLoginBox.style.display = 'flex';
});

document.addEventListener('click', (e) => {

    if (e.target.classList.contains('EmailRegister')) {
        loginSignUp.style.display = 'none';
        EmailLoginBox.style.display = 'none';
        signUpPage.style.display = 'flex';
    }
    
});

document.addEventListener('click', (e) => {

    if (e.target.classList.contains('BackLoginSignUp')) {
        loginSignUp.style.display = 'flex';
        EmailLoginBox.style.display = 'none';
        signUpPage.style.display = 'none';
    }
    
});



