function router() {
    const page = location.hash.split("=")[1];

    //if not logged
    // if (sessionStorage.getItem('user') == null) {
    //     loginController();
    //     return;
    // }

    switch (page) {
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

        default: homeController();
    }
}

$(window).on('hashchange', router);
router();