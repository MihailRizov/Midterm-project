var urlStorage = (function (){
    var lastVisited = [];

    return {
        addURL: function(url){
            lastVisited.push(url)
        },
        empty: function(){
            lastVisited = [];
        },
        getLastURL: function(){
            return lastVisited[lastVisited.length-1]
        }
    }
})()