function loginController () {
    $.get('Pages/login/login.htm').then(text => {
    $('main').html(text)}).then(()=>{
        if (!(userStorage.getCurrentUser())) {
            $('#enterLogin').on('click', function (event) {
                event.preventDefault();
                let email = $('#email').val();
                let pass = $('#password').val();
                console.log(email, pass)
                if (userStorage.logIn(email, pass)) {
                    console.log(email);
                    console.log(pass);
                    $('#loggin').text('Изход')
                    if (urlStorage.getLastURL()){
                        location.replace(urlStorage.getLastURL())
                        urlStorage.empty();
                    } else {
                        location.replace('#page=home');
                    }
                    
                } else {
                    $('#email').css('background-color', 'rgba(250, 25, 25, 0.76)');
                    $('#password').css('background-color', 'rgba(250, 25, 25, 0.76)');
                    $('.error').css('display', 'block').text('Грешна парола или еmail! Моля, опитайте отново!');
    
                }
            })
        }
    
        $('#newReg').on('click', (event) =>{
            event.preventDefault();
        location.replace('#page=register')});
            
        $('#registration').on('click', (event) =>{
            event.preventDefault();
            location.replace('#page=register')}); 

        $('#exit').on('click', (event)=>{
            event.preventDefault();
            location.replace('#page=home');
        })
    });

    
    
};
