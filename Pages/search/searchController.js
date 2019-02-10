function searchController(words) {
    let searchWords = words.map(word => {
        var correctWord = decodeURIComponent(word);
        return correctWord.substring(1, correctWord.length - 1);
    })
    console.log(searchWords);
    const resault = [];
    console.log('-------------')
    for (let cat of itemStorage.values()) {
        searchWords.forEach(word => cat.forEach(item => {
            var title = item.title.toLowerCase();
            if (title.includes(word.toLowerCase())) {
                if (!resault.some(res => res.id === item.id)) {
                    resault.push(item);
                }
            }
        }))
    }
    if (resault.length){
        var keyWords = searchWords.join('"q="');
        var searchAddress = '#page=search?q="'+keyWords+'"'
        searchResault.addResault(searchAddress);
        catController(resault);
    } else {
        $(".search").val('').attr('placeholder', 'няма резултат')
    }
}