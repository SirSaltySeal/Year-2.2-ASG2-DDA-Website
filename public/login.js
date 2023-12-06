window.onload = function() {
    document.querySelector('.login-form').classList.add('fade-in');

    document.querySelector('.login-form form').addEventListener('submit', function(event) {
        var email = document.querySelector('#exampleInputEmail1').value;
        var password = document.querySelector('#exampleInputPassword1').value;

        if (!email || !password) {
            event.preventDefault();

            if (!email) {
                alert('Please enter your email address.');
            } else if (!password) {
                alert('Please enter your password.');
            }
        }
    });
};