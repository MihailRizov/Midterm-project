function router() {
    const page = location.hash.split("=")[1];
    
    console.log(page)
    var nav  = page;
    if (page && page.includes('/')) {
        nav = '1';
    } else {
        if (page && page.includes('cat')){
            nav = "cat1"
        }
    }
    
    if (page && page.includes('search')){
        nav = 'search';
        var terms = location.hash.split("q=").splice(1)
    } 
    
    //if not logged
    // if (sessionStorage.getItem('user') == null) {
    //     loginController();
    //     return;
    // }
    switch (nav) {
        case 'home' : homeController(); break;
        case 'cat1' : catController(); break;
        case 'login' : loginController(); break;
        case 'register' : registerController(); break;
        case 'shoppingBasket' : basketController(); break;
        case 'search' : searchController(terms); break;
        case '1' : itemController(); break;

        default: homeController();  break;

    }
}

$(window).on('hashchange', router);
router();
