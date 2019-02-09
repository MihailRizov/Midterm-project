function itemController () {
    const page = location.hash.split("=")[1];
    const cat = page.split('/')[0];
    const itemId = page.split('/')[1];
    console.log(cat + '//////')
    console.log(itemId + '//////////')
    var template;
    var templateString;
    var html;
    const item = itemStorage.get(cat).find(item=> item.id === +itemId);
    $.get('Pages/itemPage/item.htm').then(text => {
        templateString = text}).then(() => template = Handlebars.compile(templateString))
        .then(() => html = template(item)).then(() => $('main').html(html))
        
}