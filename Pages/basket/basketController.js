function basketController() {
   
    const shoppingCart = userStorage.getShopingCart();
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

                console.log(666666666666)
                $('main').css('display', 'block');
                $('main').height(normalHeight);

            } else {
                console.log(2222222222222)
                $('main').height(mainHeight);
                console.log($('main').height())

            }

        });

};