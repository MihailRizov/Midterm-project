function basketController() {
    var shoppingCart = userStorage.getShopingCart();
    var totalPrice = shoppingCart.reduce((total, item) => total + item.price, 0);
    var template;
    var templateString;
    var html = '';
    const NORMAL_HEIGHT = 1050;
    $.get('Pages/basket/basket.htm').then(text => {
        templateString = text
    }).then(() => template = Handlebars.compile(templateString))
        .then(() => shoppingCart.forEach(item => html += template(item)))
        .then(() => $('main').html(html))
        .then(() => $(`<div id="totalPr"><h2 id='total'>Общо: ${totalPrice} лв</h2><button id="buy1">Купи</button></div>`).appendTo('main'))
        .then(() => {
            // var mainHeight = $('main').height();
            var mainHeight = ($('.bCont').height() * userStorage.getShopingCart().length) + $('#totalPr').height();
            $('main').css('display', 'block');
            if (userStorage.getShopingCart().length < 7) {
                console.log(mainHeight);
                // if (userStorage.getShopingCart().length < 7) {
                    // var NORMAL_HEIGHT = 1050;
                    $('main').height(NORMAL_HEIGHT);
                // } else {
                //     console.log(2222222222222)
                //     $('main').height(mainHeight);
                //     console.log($('main').height())
                // }
            } else {
                $('main').height(mainHeight);
            }
        }).then(() => {
            $('.deleteItem').on('click', function () {
                userStorage.removeItemByID(+$(this).attr('itemId'));
            })
        })

        .then(() => {
            $('#buy1').on('click', function () {
                if (totalPrice > 0) {
                    $('main').html($('<p>Благодаря Ви, че пазарувахте в <img width="300" src="assets/images/logo_img.png" alt="Logo" /></p>'))
                    lpocation('#page=home', 5000);
                    $('main').height(NORMAL_HEIGHT);

                 userStorage.buyAllItems();
                } else {
                    $('main').html($('<p>Нямате продукти </p>'))
                    $('main').height(NORMAL_HEIGHT);
                    lpocation(basketController, 2000);
                }
            })
        })

};


function lpocation(where, time) {
    setTimeout(() => {
        if (typeof where === 'string'){
            location.replace(where);
            console.log(9999999999999)  
        } else {
            where()
        }       
    }, time)
};
