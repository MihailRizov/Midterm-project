var searchResault = (function(){
    var searchResault = [];

    return{
        lastResault: function(){
            return searchResault[searchResault.length-1]
        },
        addResault: function(url){
            searchResault.push(url)
        },
    }
})()