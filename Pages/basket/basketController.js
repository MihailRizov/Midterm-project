function basketController() {
    var shoppingCart = userStorage.getShopingCart();
    var totalPrice = shoppingCart.reduce((total, item) => total + item.price, 0);
    var template;
    var templateString;
    var html = '';
    var normalHeight = 1050;
    $.get('Pages/basket/basket.htm').then(text => {
        templateString = text
    }).then(() => template = Handlebars.compile(templateString))
        .then(() => shoppingCart.forEach(item => html += template(item)))
        .then(() => $('main').html(html))
        .then(() => $(`<div id="totalPr"><h2 id='total'>Общо: ${totalPrice} лв</h2><button id="buy1">Купи</button></div>`).appendTo('main'))
        .then(() => {
            var mainHeight = $('main').height();

            if (userStorage.getShopingCart().length < 6) {

                var mainHeight = ($('.bCont').height() * userStorage.getShopingCart().length) + $('#totalPr').height();
                console.log(mainHeight);
                if (userStorage.getShopingCart().length < 7) {
                    var normalHeight = 1050;
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

        .then(() => {
            $('#buy1').on('click', function () {
                if (totalPrice > 0) {
                    $('main').html($('<p>Благодаря Ви, че пазарувахте в <img width="300" src="assets/images/logo_img.png" alt="Logo" /></p>'))
                    lpocation();
                    $('main').height(normalHeight);

                 userStorage.buyAllItems();
                } else {
                    $('main').html($('<p>Нямате продукти </p>'))
                    $('main').height(normalHeight);
                    lpocation();
                }
            })
        })

};


function lpocation() {
    setTimeout(() => {
        location.replace('#page=home');
        console.log(9999999999999)
    }, 7000)
};
