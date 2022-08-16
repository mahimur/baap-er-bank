// Step: 1 Add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step: 2 Get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step: 3 get password
    // 3.a: set id on html element
    // 3.b: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    // DANGER: DO NOT VERIFY email password on the client's side
    // Step: 4 Verify email and password and check whether valid user or not
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui password vule gesos!!! Tuke ami tejjo potro ghoshona korlam (^_^)')
    }
    // clear input field
    emailField.value = '';
    passwordField.value = '';
});