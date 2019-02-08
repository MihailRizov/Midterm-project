$(function(){
    $('#logo').on('click', function(){
        location.replace('#page=home');
    })
    $('#loggin').on('click',function(){
        if (!(userStorage.getCurrentUser())){
        location.replace('#page=login');
        } else {
            $('#loggin').text('Вход/Регистрация').on('click', function(){
                userStorage.logOut();
            })
            
        }
    })
}) 