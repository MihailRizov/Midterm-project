var itemStorage = (function(){
    var itemStorage = new Map();
var uniqueIDAssigner = {
    uniqueIDs: [],
    getUnicueID: function(){
        const START_ID = 1;
        if (this.uniqueIDs.length <= 0) {
            this.uniqueIDs.push(START_ID);
            return START_ID;
        } else {
            let index = this.uniqueIDs.length - 1;
            let newID = this.uniqueIDs[index] + 1;
            this.uniqueIDs.push(newID);
            return newID;
        }
    }
}



itemStorage.set('cat1',[]).set('cat2',[]).set('cat3',[]).set('cat4', []).set('cat5', []).set('cat6', []).set('cat7', []);

const TITLE_WOMAN = ['Дамска рокля с панделка', 'Дамска блуза с къс ръкав', 'Дамски топ с акцент на рамото', 'Дамски топ с интересен гръб', 'Дамски къс топ','Дамски потник с връзки'];
const TITLE_WOMAN_SRC = [
'assets/images/itemWoman1.jpg',
'assets/images/itemWoman2.JPG',
'assets/images/itemWoman3.jpg',
'assets/images/itemWoman4.jpg',
'assets/images/itemWoman5.jpg',
'assets/images/itemWoman6.jpg'];
const COLOR_WOMAN = ['тъмно зелен', 'черен', 'черен', 'бял', 'зелен', 'розов'];
const SIZE = ['M','L', 'XS', 'XS', 'S', 'XXL'];


const TITLE_MAN = ['Мъжки дънки с изчистен дизайн', 'Мъжка блуза с дълъг ръкав', 'Мъжко спортно горнище',
'Мъжки суитшърт с качулка', 'Мъжка жилетка с дълъг ръкав', 'Мъжки елек с качулка'];
const TITLE_MAN_SRC = [ 
'assets/images/itemMan1.jpg', 
'assets/images/itemMan2.jpg', 
'assets/images/itemMan3.jpg',
'assets/images/itemMan4.jpg',
'assets/images/itemMan5.jpg',
'assets/images/itemMan6.jpg'];
const COLOR_MAN = ['сив', 'черен', 'черен', 'бордо', 'тъмно сив','син'];

const TITLE_KIDS = ['Детска рокля с апликация', ' Детско долнище за момчета', 'Детски комплект за момичета',
'Детска блуза с дълъг ръкав', 'Детска блуза с дълъг ръкав за момичета','Детско пончо'];
const TITLE_KIDS_SRC = [
'assets/images/itemKids1.jpg',
'assets/images/itemKids2.jpg',
'assets/images/itemKids3.jpg',
'assets/images/itemKids4.jpg',
'assets/images/itemKids5.JPG',
'assets/images/itemKids6.jpg'];
const COLOR_KIDS= ['прасковено', 'тъмно син','розов', 'бледо зелен', 'цикламено','червен']
const KIDS_SIZE = ['6м', '9м', '1г', '1.5г', '3г', '4г'];

const TITLE_BAGS = ['Дамска стилна чанта', 'Дамска стилна чанта', 'Дамска ефектна чанта с дълга дръжка',
'Дамска кожена раница с преден джоб','Мъжка кожена чанта','Мъжка текстилна чанта'];
const TITLE_BAGS_SRC = [
'assets/images/itemBag1.jpg',
'assets/images/itemBag2.jpg',
'assets/images/itemBag3.jpg',
'assets/images/itemBag4.jpg',
'assets/images/itemBag5.jpg',
'assets/images/itemBag6.jpg'];
const BAGS_SIZE = ['стандартен', 'стандартен', 'стандартен','стандартен','стандартен','стандартен'];
const COLOR_BAGS = ['син',' червен', 'сребрист', 'кафяв','черен','черен'];


const TITLE_SHOES = ['Дамски маратонки с платформа', 'Мъжки зимни боти', 'Дамски маратонки с надписи',
'Дамски боти с лачени панели и декоративни връзки',' Дамски спортни обувки с връзки',
'Мъжки текстилни маратонки'];
const TITLE_SHOES_SRC=[
'assets/images/itemShoes1.jpg',
'assets/images/itemShoes2.jpg',
'assets/images/itemShoes3.jpg',
'assets/images/itemShoes4.jpg',
'assets/images/itemShoes5.jpg',
'assets/images/itemShoes6.jpg'];
const SHOES_SIZE = ['37','43','38','36','38','45'];
const COLOR_SHOES = ['черен', ' черен', ' черен', ' черен', 'син', 'черен'];


const TITLE_SPORT = ['Power Balance', 'Хронометър Q&Q HS45J002Y', 'Хронометър Q&Q HS46J002Y',
'Метална игла за топки PUMA Ball Pump Needle Replacement - за баскетбол, волейбол, футбол','Хронометър Q&Q HS46J003Y',
'Хронометър Q&Q MF01J001Y'];
const TITLE_SPORT_SRC=[
'assets/images/itemSport1.JPG',
'assets/images/itemSport2.jpg',
'assets/images/itemSport3.jpg',
'assets/images/itemSport4.jpg',
'assets/images/itemSport5.jpg',
'assets/images/itemSport6.jpg'];
const COLOR_SPORT = ['лилав', 'сив', 'син', 'бял', 'червен', 'черен'];


const TITLE_COSMETICS = ['Палитра с кремообразни контури', ' Стик - коректор 2 в 1', 'Молив за очи и вежди 2в1',
'Натурален ФОН дьо ТЕН с НЕВЕН: естествен тен без да запушва порите - 45 ml','BROOKLIN Спирала MAGIQUE VOLUME',
'Балсам за устни'];
const TITLE_COSMETICS_SRC=[
'assets/images/itemCosmetic1.jpg',
'assets/images/itemCosmetic2.jpg',
'assets/images/itemCosmetic3.jpg',
'assets/images/itemCosmetic4.jpg',
'assets/images/itemCosmetic5.jpg',
'assets/images/itemCosmetic6.jpg'];
const COLOR_COSMETICS = ['пъстър', ' medium', 'light', 'dark', 'черен', 'лилав'];


class Item {
    constructor(title, imgSrc, color){
        this.title = title;
        this.delivery = '48 часа';
        this.imgSrc = imgSrc;
        this.id = uniqueIDAssigner.getUnicueID();
        this.price = Math.ceil(Math.random() * (200 - 100)) + 100
        this.color = color;
        this.quantity = 1;
    }
}

class Item2  extends Item{
    constructor(title, imgSrc, size, color){
        super(title,imgSrc,color)
        this.size = size;  
    }
}

for (let index = 0; index < TITLE_SPORT.length; index++) {
    itemStorage.get('cat6').push(new Item(TITLE_SPORT[index], TITLE_SPORT_SRC[index],COLOR_SPORT[index]))
    itemStorage.get('cat7').push(new Item(TITLE_COSMETICS[index], TITLE_COSMETICS_SRC[index],COLOR_COSMETICS[index]))
}

for (let index = 0; index < TITLE_WOMAN.length; index++) {
    itemStorage.get('cat2').push(new Item2(TITLE_WOMAN[index], TITLE_WOMAN_SRC[index], SIZE[index],COLOR_WOMAN[index]))
    itemStorage.get('cat1').push(new Item2(TITLE_MAN[index], TITLE_MAN_SRC[index], SIZE[index],COLOR_MAN[index]))
    itemStorage.get('cat4').push(new Item2(TITLE_BAGS[index], TITLE_BAGS_SRC[index], BAGS_SIZE[index],COLOR_BAGS[index]))
    itemStorage.get('cat5').push(new Item2(TITLE_SHOES[index], TITLE_SHOES_SRC[index], SHOES_SIZE[index],COLOR_SHOES[index]))
    itemStorage.get('cat3').push(new Item2(TITLE_KIDS[index], TITLE_KIDS_SRC[index], KIDS_SIZE[index],COLOR_KIDS[index]))
}



// for (let index = 0; index < TITLE_MAN.length; index++) {
//     itemStorage.get('cat1').push(new Item(TITLE_MAN[index], TITLE_MAN_SRC[index], SIZE[index],COLOR_MAN[index]))
// }
// for (let index = 0; index < TITLE_BAGS.length; index++) {
//     itemStorage.get('cat4').push(new Item(TITLE_BAGS[index], TITLE_BAGS_SRC[index], SIZE[index],COLOR_BAGS[index]))
// }
// for (let index = 0; index < TITLE_BAGS.length; index++) {
//     itemStorage.get('cat5').push(new Item(TITLE_SHOES[index], TITLE_SHOES_SRC[index], SIZE[index],COLOR_SHOES[index]))
// }
// for (let index = 0; index < TITLE_BAGS.length; index++) {
//     itemStorage.get('cat6').push(new Item(TITLE_[index], TITLE_SHOES_SRC[index], SIZE[index],COLOR_SHOES[index]))
// }
return itemStorage;



})()