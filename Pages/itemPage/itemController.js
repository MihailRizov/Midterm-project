function itemController() {
    const page = location.hash.split("=")[1];
    const cat = page.split('/')[0];
    const itemId = page.split('/')[1];
    console.log(cat + '//////')
    console.log(itemId + '//////////')
    var template;
    var templateString;
    var html;
    const item = itemStorage.get(cat).find(item => item.id === +itemId);
    $.get('Pages/itemPage/item.htm').then(text => {
        templateString = text
    }).then(() => template = Handlebars.compile(templateString))
        .then(() => html = template(item)).then(() => $('main').html(html)).then(() => {
            console.log(111111111111111111111111111)
            $('#back').on('click', function (event) {
                event.preventDefault();
                location.replace('#page=' + cat);
                console.log(cat);
            });

            $('#buy').on('click', function (event) {
                event.preventDefault();
                if (userStorage.getCurrentUser()){
                    console.log(cat, +itemId)
                    userStorage.addItemByID(cat,+itemId);
                    console.log(userStorage.getShopingCart())
                } else {
                    location.replace('#page=login');
                }
            });
        })


};