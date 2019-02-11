function basketController() {
<<<<<<< HEAD

    const shoppingCart = userStorage.getShopingCart();
=======
    var shoppingCart = userStorage.getShopingCart();
>>>>>>> 027bcf7099050e87bd8134dd0fe10bbee8e9e852
    var totalPrice = shoppingCart.reduce((total, item) => total + item.price, 0);
    var template;
    var templateString;
    var html = ''
    $.get('Pages/basket/basket.htm').then(text => {
        templateString = text
    }).then(() => template = Handlebars.compile(templateString))
        .then(() => shoppingCart.forEach(item => html += template(item)))
        .then(() => $('main').html(html))
        .then(() => $(`<div id="totalPr"><h2>Общо: ${totalPrice} лв</h2><button>Купи</button></div>`).appendTo('main'))
        .then(() => {

            var mainHeight = $('main').height();
            var normalHeight = 1050;
            if (userStorage.getShopingCart().length < 6) {

                var mainHeight = ($('.bCont').height() * userStorage.getShopingCart().length) + $('#totalPr').height();
                console.log(mainHeight);
                if (userStorage.getShopingCart().length < 7) {
                    var normalHeight = 1050;

                    console.log(666666666666)
                    $('main').css('display', 'block');
                    $('main').height(normalHeight);


                } else {
                    console.log(2222222222222)
                    $('main').height(mainHeight);
                    console.log($('main').height())
                }
            } else {
                $('main').height(mainHeight);
            }
        }).then(() => {
            $('.deleteItem').on('click', function () {
                userStorage.removeItemByID(+$(this).attr('itemId'));
            })
        })


}

    
