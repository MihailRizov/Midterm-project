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
    $(() => {
            for (let cat of itemStorage.values()) {
                cat.forEach(item => {
                    $('#suggestions').append(
                    $(`<option value="${item.title}">${''}</option>`));
                })
            }
    })
            



    $(".search").on("keyup", function (event) {
        if (event.keyCode === 13) {
            const OLD_PAGE = location.hash.split("=")[1];
            const MAX_LENGHT = 100;
            var searchItems = ($(".search").val()).substring(0, MAX_LENGHT).trim().split(' ');
            searchItems = searchItems.filter(word => word.length > 3);          
            if (searchItems.length >= 1){
                var keyWords = searchItems.join('"q="');
                urlStorage.addURL(OLD_PAGE);
                location.replace('#page=search?q="'+keyWords+'"')
            } else {
                $(".search").attr('placeholder', 'напиши нещо тук')
            }
            
            
        }  
        });


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
                // basketController();
                
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

