function homeController() {
    $.get('Pages/home/home.htm').then(text => {
        $('main').html(text)
        $(".sections > div[catId]").on('click', function(){
            var id = $(this).attr('catId');
            location.replace(`#page=${id}`);
        })
    });
    
        
    
   
}

// var id = $(this).attr('catId');
//         console.log($(this));
//         location.replace(`#page=${id}`);