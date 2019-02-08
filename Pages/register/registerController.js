$(function () {
    $('#submitButtonReg').on('click', function (event) {
        event.preventDefault();

        let username = $('#registerBox2 > input').val();
        let password = $('#registerBox5 > input').val();
        let email = $('#registerBox4 > input').val();
        let hasErrors = false;


        if (username.trim().length <= 2) {
            $('#registerBox2 > .error').text('Невалидно име!');
            hasErrors = true;
        } else {
            $('#registerBox2 > .error').text('');
        }

        if (password.trim().length <= 3) {
            $('#registerBox5 > .error').text('Невалидна парола!');
            hasErrors = true;
        } else {
            let passAgain = $('#registerBox6 > input').val();
            if (passAgain !== password) {
                $('#registerBox6 > .error').text('Паролите не съвпадат!');
                hasErrors = true;
            } else {
                $('#registerBox2 > .error').text('');
            }
        }

        if (!isEmailValid(email)) {
            $('#registerBox4 > .error').text('Невалиден email!');
            hasErrors = true;
        } else {
            $('#registerBox4 > .error').text('');
        }

        if (!hasErrors && $('input[type=checkbox]:checked')) {
            userStorage.register(username, password, email);
            console.log(username);
            console.log(password);
            console.log(email);

            location.replace('#page=login');
        } else {
            $('#registerCheckbox2 > .error').text('Трябва да се съгласите с Условията за ползване и с Условията за предоставяне на лични данни, за да продължите!');

        }
    });
});


function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
