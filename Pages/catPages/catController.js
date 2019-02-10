function catController(searchedItems) {
    const page = location.hash.split("=")[1];
    var content = itemStorage.get(page);
    if (searchedItems){
        content = searchedItems;
    } else {
        searchResault.emptyResault();
    }
    var templateString;
    var template;
    var htm = ''
    $.get('Pages/catPages/cat.htm').then(text => {
            templateString = text;
        }).then(() => template = Handlebars.compile(templateString))
        .then(() => content.forEach(content => htm += template(content)))
        .then(() => $('main').html(htm)).then(() => $('main > div').on('click', function () {
            if (searchedItems){
                var cat;
                for(let key of itemStorage.keys()){
                    if (itemStorage.get(key).some(item => item.id === +$(this).attr('itemId'))){
                        cat = key;
                    }
                }
                location.replace(`#page=${cat}/${$(this).attr('itemid')}`);
            } else {
            const page = location.hash
            location.replace(page + '/' + $(this).attr('itemid'));
            }
        }))
};