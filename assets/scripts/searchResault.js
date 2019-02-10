var searchResault = (function(){
    var searchResaults = '';

    return{
        lastResault: function(){
            return searchResaults
        },
        addResault: function(url){
            searchResaults = url
            console.log(searchResaults)
        },
        emptyResault: function(){
            searchResaults = undefined;
        }
    }
})()