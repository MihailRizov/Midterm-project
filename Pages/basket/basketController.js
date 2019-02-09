function basketController (){
    const shoppingCart = userStorage.getShopingCart();
    var totalPrice = shoppingCart.reduce((total, item) => total + item.price,0);
    var template;
    var templateString;
    var html = ''
    $.get('Pages/basket/basket.htm').then(text => {
        templateString = text}).then(() => template = Handlebars.compile(templateString))
        .then(() => shoppingCart.forEach(item => html+= template(item)))
        .then(() => $('main').html(html))
        .then(() => $(`<div><h2>Общо: ${totalPrice}</h2><button>Купи</button>`).appendTo('main'));
};