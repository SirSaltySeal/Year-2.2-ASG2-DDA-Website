document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting

    // get the form inputs
    var email = document.getElementById('exampleInputEmail1');
    var password = document.getElementById('exampleInputPassword1');
    var confirmPassword = document.getElementById('exampleInputPassword2');

    // validate the inputs
    if (!email.value) {
        alert('Please enter your email');
        return;
    }

    if (!password.value) {
        alert('Please enter your password');
        return;
    }

    if (!confirmPassword.value) {
        alert('Please confirm your password');
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
    }

    // if everything is valid, submit the form
    this.submit();
});