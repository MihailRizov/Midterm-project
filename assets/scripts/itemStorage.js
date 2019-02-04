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



itemStorage.set('cat1',[]).set('cat2',[]).set('cat3',[]).set('cat4', []).set('cat5', []).set('cat6', []);

const TITLE_WOMAN = ['Дамска рокля с панделка', 'Дамска блуза с къс ръкав', 'Дамски топ с акцент на рамото', 'Дамски топ с интересен гръб', 'Дамски къс топ','Дамски потник с връзки'];
const TITLE_WOMAN_SRC = ['http://vmzona.com/product_pics/big/IMG_8545copy_1158043.jpg',
'http://vmzona.com/product_pics/big/IMG_3423_1158348.JPG',
'http://vmzona.com/product_pics/big/IMG_5730copy_1022816.jpg',
'http://vmzona.com/product_pics/big/1_1117616.jpg',
'http://vmzona.com/product_pics/big/IMG_8226copy_1130871.jpg',
'http://vmzona.com/product_pics/big/IMG_7939_1045619_1045619.jpg'];
const COLOR_WOMAN = ['тъмно зелен', 'черен', 'черен', 'бял', 'зелен', 'розов'];
const SIZE = ['M','L', 'XS', 'XS', 'S', 'XXL'];





const TITLE_MAN = ['Мъжки дънки с изчистен дизайн', 'Мъжка блуза с дълъг ръкав', 'Мъжко спортно горнище',
'Мъжки суитшърт с качулка', 'Мъжка жилетка с дълъг ръкав', 'Мъжки елек с качулка'];
const TITLE_MAN_SRC = [ 'http://vmzona.com/product_pics/big/IMG_0529copy_1154296.jpg', 
'http://vmzona.com/product_pics/big/IMG_7800copy_1157518.jpg', 
'http://vmzona.com/product_pics/big/IMG_8074copy_1148350.jpg',
'http://vmzona.com/product_pics/big/IMG_5269copy_1144111.jpg',
'http://vmzona.com/product_pics/big/IMG_9126copy_1133146.jpg',
'http://vmzona.com/product_pics/big/1_1132753.jpg'];
const COLOR_MAN = ['сив', 'черен', 'черен', 'бордо', 'тъмно сив','син'];

const TITLE_KIDS = ['Детска рокля с апликация', ' Детско долнище за момчета', 'Детски комплект за момичета',
'Детска блуза с дълъг ръкав', 'Детска блуза с дълъг ръкав за момичета','Детско пончо'];
const TITLE_KIDS_SRC = ['http://vmzona.com/product_pics/big/IMG_1863_1155590.jpg',
'http://vmzona.com/product_pics/big/54337_1154247.jpg',
'http://vmzona.com/product_pics/big/IMG_9772copy_1151842.jpg',
'http://vmzona.com/product_pics/big/DSC_0010copy_1149571.jpg',
'http://vmzona.com/product_pics/big/IMG_6677_1147348.JPG',
'http://vmzona.com/product_pics/big/IMG_3572copy_1141567.jpg'];
const COLOR_KIDS= ['прасковено', 'тъмно син','розов', 'бледо зелен', 'цикламено','червен']
const KIDS_SIZE = ['6м', '9м', '1г', '1.5г', '3г', '4г'];

const TITLE_BAGS = ['Дамска стилна чанта', 'Дамска стилна чанта', 'Дамска ефектна чанта с дълга дръжка',
'Дамска кожена раница с преден джоб','Мъжка кожена чанта','Мъжка текстилна чанта'];
const TITLE_BAGS_SRC = ['http://vmzona.com/product_pics/big/DSC_1793_1156516.jpg',
'http://vmzona.com/product_pics/big/DSC_1727_1156508_1156508.jpg',
'http://vmzona.com/product_pics/big/DSC_1669_1155896.jpg',
'http://vmzona.com/product_pics/big/IMG_1569_1155195_1155195.jpg',
'http://vmzona.com/product_pics/big/IMG_9511_1151540.jpg',
'http://vmzona.com/product_pics/big/IMG_1400_1154895.jpg'];
const BAGS_SIZE = ['стандартен', 'стандартен', 'стандартен','стандартен','стандартен','стандартен'];
const COLOR_BAGS = ['син',' червен', 'сребрист', 'кафяв','черен','черен'];


const TITLE_SHOES = ['Дамски маратонки с платформа', 'Мъжки зимни боти', 'Дамски маратонки с надписи',
'Дамски боти с лачени панели и декоративни връзки',' Дамски спортни обувки с връзки контрастни кантове и орнамент отпред',
'Мъжки текстилни маратонки'];
const TITLE_SHOES_SRC=['http://vmzona.com/product_pics/big/IMG_8105copy_1157697.jpg',
'http://vmzona.com/product_pics/big/IMG_8096copy_1157691.jpg',
'http://vmzona.com/product_pics/big/IMG_8078copy_1157677.jpg',
'http://vmzona.com/product_pics/big/WB043-7Blk_287688_781415.jpg',
'http://vmzona.com/product_pics/big/2212-3Blue_287354_781425.jpg',
'http://vmzona.com/product_pics/big/DSC_0883copy_1154246.jpg'];
const SHOES_SIZE = ['37','43','38','36','38','45'];
const COLOR_SHOES = ['черен', ' черен', ' черен', ' черен', 'син', 'черен'];

class Item {
    constructor(title, imgSrc, size, color){
        this.title = title;
        this.size = size;
        this.delivery = '48 часа';
        this.imgSrc = imgSrc;
        this.quantity = Math.ceil(Math.random() * 10);
        this.id = uniqueIDAssigner.getUnicueID();
        this.price = +(Math.random() * (200 - 100) + 100).toFixed(2);
        this.color = color;
    }
}
for (let index = 0; index < TITLE_WOMAN.length; index++) {
    itemStorage.get('cat2').push(new Item(TITLE_WOMAN[index], TITLE_WOMAN_SRC[index], SIZE[index],COLOR_WOMAN[index]))
    itemStorage.get('cat1').push(new Item(TITLE_MAN[index], TITLE_MAN_SRC[index], SIZE[index],COLOR_MAN[index]))
    itemStorage.get('cat4').push(new Item(TITLE_BAGS[index], TITLE_BAGS_SRC[index], SIZE[index],COLOR_BAGS[index]))
    itemStorage.get('cat5').push(new Item(TITLE_SHOES[index], TITLE_SHOES_SRC[index], SIZE[index],COLOR_SHOES[index]))
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

console.log(itemStorage.get('cat1'));

