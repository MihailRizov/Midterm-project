function catController (){
    const page = location.hash.split("=")[1];
            console.log(page)
            var content = itemStorage.get(page);
            console.log(content)
            var templateString;
            var template;
            var htm = '' 
            $.get('Pages/catPages/cat.htm').then(text => {
            templateString = text;
            }).then(() => template = Handlebars.compile(templateString))
            .then(() => content.forEach(content => htm+= template(content)))
            .then(() => $('main').html(htm)).then(() => $('main > div').on('click', function(){
                const page = location.hash
                location.replace(page + '/' + $(this).attr('itemid'));
            }))
};