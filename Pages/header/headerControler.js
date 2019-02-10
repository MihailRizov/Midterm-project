$(function () {
    $('#logo').on('click', function () {
        location.replace('#page=home');
    });

    $('#loggin').on('click', function () {
        if (!(userStorage.getCurrentUser())) {
            urlStorage.addURL(location.hash);
            location.replace('#page=login');
        } else {
            $('#loggin').text('Вход / Регистрация')
            userStorage.logOut();
            location.replace('#page=home')

        }
    });
    $(".search").on("keyup", function (event) {
        if (event.keyCode === 13) {
            var searchItems = ($(".search").val()).trim().split(' ');           
            if (searchItems.length >= 1){
                var keyWords = searchItems.join('"q="');
                location.replace('#page=search?q="'+keyWords+'"')
            } else {
                $(".search").attr('placeholder', 'напиши нещо тук')
            }
            
            
        }  
        });
    // $('#number-orders').on('click', (event) => {
    //     event.preventDefault();
    //     if (userStorage.getCurrentUser() && userStorage.getShopingCart().length) {
    //         $('#number-orders').text(userStorage.getShopingCart().length);
    //     } else {
    //         $('#number-orders').text('0');
    //     }
    // });

    $('#basket').on('click', (event) => {
        event.preventDefault();
    
        if (userStorage.getCurrentUser() && userStorage.getShopingCart().length) {
            location.replace('#page=shoppingBasket');
            if (userStorage.getShopingCart().length < 1) {
                $('#basket').animate({
                    width: 250,
                }, 500).text('Нямате налични артикули.').animate({
                    width: 50,
                    fontSize: 0.8,
                }, 5000, () => {
                    $('#basket').text('');
                })
            }else{
                location.replace('#page=shoppingBasket');
            }
        } else {
            $('#basket').animate({
                width: 250,
            }, 500).text('Нямате налични артикули.').animate({
                width: 50,
            }, 5000, () => {
                $('#basket').text('');
            });
        }
    });
});

