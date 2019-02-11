function catController(searchedItems) {
    const page = location.hash.split("=")[1];
    const HEIGHT = 525;
    $('main').css('display', 'flex')
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
        .then(() => $('main').html(htm)).then(()=> $('main').height(1050)).then(() => $('main > div').on('click', function () {
            if (searchedItems){
                var cat;
                for(let key of itemStorage.keys()){
                    if (itemStorage.get(key).some(item => item.id === +$(this).attr('itemId'))){
                        cat = key;
                        console.log(key + '/////');
                    }
                }
                location.replace(`#page=${cat}/${$(this).attr('itemid')}`);
            } else {
            const page = location.hash
            location.replace(page + '/' + $(this).attr('itemid'));
            }
<<<<<<< HEAD
        }))

        // $('aside').on('click',function(event){
        //     event.preventDefault();
        //      $('main').height(1050);
        // })
=======
        })).then(() => {
            var coef = Math.ceil($('main > div').length / 3);
            $('main').height(HEIGHT * coef);
            if ($('main').height() < HEIGHT * 2){
                $('main').height(HEIGHT * 2);
            }
        })
>>>>>>> 027bcf7099050e87bd8134dd0fe10bbee8e9e852
};