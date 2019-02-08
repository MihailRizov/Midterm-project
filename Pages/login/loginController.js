$(function () {
    if (!(userStorage.getCurrentUser())) {
        $('#enterLogin').on('click', function (event) {
            event.preventDefault();
            let email = $('#email').val();
            let pass = $('#password').val();
            if (userStorage.logIn(email, pass)) {
                console.log(email);
                console.log(pass);
                location.replace('#page=home');
            } else {
                $('#email').css('background-color', 'rgba(250, 25, 25, 0.76)');
                $('#password').css('background-color', 'rgba(250, 25, 25, 0.76)');
                $('.error').css('display', 'block').text('Грешна парола или еmail! Моля, опитайте отново!');

            }
        })
    }

    $('#newReg').on('click', () => location.replace('#page=register'));
        
    $('#registration').on('click', () => location.replace('#page=register')); 
    
});
