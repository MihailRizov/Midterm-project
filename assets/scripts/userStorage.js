var userStorage = (function(){
    var userId = 0;
    var userList = [];

    class User{
        constructor(name, password,email){
            this.name = name;
            this.password = password;
            this.id = userId++;
            this.shopingCart = [];
            this.email=email;
        }
        // addItem(item){
        //     this.shopingCart.push(item)
        // }
        // getShopingCart(){
        //     return this.shopingCart;
        // }
        // getItemCount(){
        //     return this.shopingCart.length += 1;
        // }
    }

    if (localStorage.getItem('userList') !== null) {
        userList = JSON.parse(localStorage.getItem('userList'));
    } else {
        userList = [
            new User('a','1', 'aaa')
        ]
    }

    if (sessionStorage.getItem('currentUser') !== null) {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } else {
        var currentUser = null;
    }
    
console.log(userList)
    return {
        logIn: function(email, pass){
            var loginUser = userList.find(user => user.email === email && user.password === pass);
            if (loginUser) {
                currentUser = loginUser;
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                return true;
            } else {
                return false;
            }

        },
        getCurrentUser: function(){
            return currentUser
        },
        logOut: function(){
            currentUser = null;
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        },
        register: function(username, password,email) {
            userList.push(new User(username, password,email));
            localStorage.setItem('userList', JSON.stringify(userList));
        },
        addItem: function(item){
            var index = userList.findIndex(user => user.id === currentUser.id)
            userList[index].shopingCart.push(item);
            localStorage.setItem('userList', JSON.stringify(userList));
        },
        getShopingCart: function(){
            var index = userList.findIndex(user => user.id === currentUser.id);
            return userList[index].shopingCart
        },
        addItemByID: function(cat,id){
            const item = itemStorage.get(cat).find(item=> item.id === +id);
            userStorage.addItem(item);

        }

    } 

})()
/// moje da pisheh if (userList.getCurrentUser()){}- ako ima lognat shte sraboti