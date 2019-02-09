$(function () {
    $('#logo').on('click', function () {
        location.replace('#page=home');
    });

    $('#loggin').on('click', function () {
        if (!(userStorage.getCurrentUser())) {
            location.replace('#page=login');
        } else {
            $('#loggin').text('Вход / Регистрация').on('click', function () {
                userStorage.logOut();
            });

        }
    });

    $('#number-orders').on('click', (event) => {
        event.preventDefault();
        if ((userStorage.getCurrentUser() !== null) && userStorage.getCurrentUser().getItemCount() > 1) {
            $('#number-orders').text(userStorage.getCurrentUser().getItemCount());
        } else {
            $('#number-orders').text('0');
        }
    });

    $('#basket').on('click', (event) => {
        event.preventDefault();

        // if (userStorage.getCurrentUser().getItemCount() > 1) {
        //     location.replace('#page=shoppingBasket');
        // } else {
            if (userStorage.getCurrentUser() === null) {
                $('#basket').animate({
                    width: 250,
                }, 500).text('Нямате налични артикули.').animate({
                    width:50,
                   fontSize:0.8,
                }, 5000,  ()=>{
              
                    $('#basket').text('');
                    
                });
            }
        // }
    });

});

