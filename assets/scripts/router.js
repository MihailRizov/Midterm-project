function router() {
    const page = location.hash.split("=")[1];
    // const item = location.hash.split("/")[1];
    console.log(page)
    var cat = page.split("/")[1];
    var nav  = page;
    if (cat) {
        nav = '1';
    }
    if (page.includes('search')){
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
        case 'cat2' : catController(); break;
        case 'cat3' : catController(); break;
        case 'cat4' : catController(); break;
        case 'cat5' : catController(); break;
        case 'cat6' : catController(); break;
        case 'cat7' : catController(); break;
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