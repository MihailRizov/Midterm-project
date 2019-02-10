$(function () {
    $('#logo').on('click', function () {
        location.replace('#page=home');
    });

    $('#loggin').on('click', function () {
        if (!(userStorage.getCurrentUser())) {
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
            var resault = [];
            console.log('-------------')
            for (let cat of itemStorage.values()) {
                searchItems.forEach(word => cat.forEach(item =>{
                    var title = item.title.toLowerCase();
                    if (title.includes(word.toLowerCase())){
                        if (!resault.some(res => res.id === item.id)){
                            resault.push(item);
                        }
                    }
                }))
            }
            if (resault.length){
                catController(resault);
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
        console.log(8888888)
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
                console.log(777777777777)
            }else{
                location.replace('#page=shoppingBasket');
                console.log(4444)
            }
        
        } else {
            $('#basket').animate({
                width: 250,
            }, 500).text('Нямате налични артикули.').animate({
                width: 50,
            }, 5000, () => {

                $('#basket').text('');

            });
            console.log(99999)
        }
    
    });

});

