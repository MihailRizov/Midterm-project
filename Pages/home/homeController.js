function homeController() {
    $('main').css('display', 'flex').height(1050);
    $.get('Pages/home/home.htm').then(text => {
        $('main').html(text)
        $(".sections > div[catId]").on('click', function(){
            var id = $(this).attr('catId');
            location.replace(`#page=${id}`);
        })
        
    });
    
        
    
   
}

