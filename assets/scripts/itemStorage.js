var itemStorage = new Map();
const MIN_STRING_LENGHT = 4;
const FIRST_UPPER_CASE_LETTER = 'A';
const LAST_UPPER_CASE_LETTER = 'Z';
const FIRST_LOWER_CASE_LETTER = 'a';
const LAST_LOWER_CASE_LETTER = 'z';
const FIRST_DIGIT = '0';
const LAST_DIGIT = '9';
const ERROR_PASS_MESSAGE = 'Your password argument is invalid!';

var toolBox = {
    checkForString: function () {
        const MINIMUM_LENGTH = 1;
        let check = Array.prototype.filter.call(arguments, element => typeof element === 'string' &&
            element.trim().length >= MINIMUM_LENGTH);
        let correctInput = Object.keys(check).length;
        if (correctInput === 0) {
            return false;
        }
        return (correctInput !== arguments.length) ? false : true;
    },

    checkForNumber: function (){
        const MINIMUM_ALLOWED_VALUE = 1;
        const MAXIMUM_ALLOWED_VALUE =1000000;
        let check = Array.prototype.filter.call(arguments, element => typeof element ==='number'
        && element >= MINIMUM_ALLOWED_VALUE && element <= MAXIMUM_ALLOWED_VALUE);
        let correctInput = Object.keys(check).length;
        if (correctInput === 0) {
            return false;
        }
        return (correctInput !== arguments.length) ? false : true;
    },
    checkForBoolValue: function() {
        let check = Array.prototype.filter.call(arguments, element => typeof element === 'boolean');
        let correctInput = Object.keys(check).length;
        if (correctInput === 0) {
            return false;
        }
        return (correctInput !== arguments.length) ? false : true;
    },
    checkLenght: function(word) { 
        if(this.checkForString(word)){
            return word.trim().length >= MIN_STRING_LENGHT;
        } else {
            throw new Error(ERROR_PASS_MESSAGE);
        }
    },
    checkForUpperCase: function(word){
        if (this.checkForString(word)){
            for(let index = 0; index < word.trim().length; index++) {
                if (word.charAt(index) >= FIRST_UPPER_CASE_LETTER && word.charAt(index) <= LAST_UPPER_CASE_LETTER) { //Uppercase condition
                    return true;   
                } 
            }
            return false;
        } else {
            throw new Error(ERROR_PASS_MESSAGE);
        }
   
    },
    checkForLowerCase: function(word){
        if (this.checkForString(word)) {
            for(let index = 0; index < word.trim().length; index++) {
                if (word.charAt(index) >= FIRST_LOWER_CASE_LETTER && word.charAt(index) <= LAST_LOWER_CASE_LETTER) { //Lowercase condition
                    return true;
                } 
            }
            return false;
        } else {
            throw new Error(ERROR_PASS_MESSAGE);
        }

    },
    checkForDigitInString: function (word){
        if (this.checkForString(word)) {
            for(let index = 0; index < word.trim().length; index++) {
                if (word.charAt(index) >= FIRST_DIGIT && word.charAt(index) <= LAST_DIGIT) { //Digit condition
                    return true;
                } 
            }
            return false;
        } else {
            throw new Error(ERROR_PASS_MESSAGE);
        }
    },
    makeArraysOnSteroids: function(){
        Array.prototype.randomElement = function() {
        let randomIndex = Math.floor(Math.random() * this.length);
        return this[randomIndex];
        }
        Array.prototype.findElementById = function(id) {
        let [element] = this.filter(element => element.id === id)
        return (element) ? element : null;
        }
        Array.prototype.findElementIndexById = function(id){
        return this.findIndex(element => element.id === id)
        }
    
    },
    getNextElement: function (arr) {
        var index = 0;
        return function () {
            if (index >= arr.length) {
                index = 0
            }
            return arr[index++];
        };
    },
    /**
     * 
     * @param {*} array Array of objects
     * @param {*} key  string
     * @param {*} value value of property
     */
    searchForObjectInArray: function(array, key, value){
        let object = array.find(element => element[key] === value);
        return object;
    },
    searchForObjectInArrayIndex: function(array, key, value) {
        let index = array.findIndex(element => element[key] === value);
        return index;
    },
    getRandomIntInclusive: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    currentArrayIndex: 0,
    getCurrentItemOfArray: function(array){
        if (toolBox.currentArrayIndex >= array.length) {
            console.log('NamesOfPeople says: You run out of unique names! I will restart the counter now!');
            toolBox.currentArrayIndex = 0;
        }
        return array[toolBox.currentArrayIndex++];
    },
    getAgeOfPeople: function(){
        const MINIMUM_AGE = 18;
        const MAXIMUM_AGE = 80;
        return toolBox.getRandomIntInclusive(MINIMUM_AGE,MAXIMUM_AGE);
    },
    getSalaryOfPeople: function(){
        const MINIMUM_SALARY = 1000;
        const MAXIMUM_SALARY = 5000;
        return toolBox.getRandomIntInclusive(MINIMUM_SALARY, MAXIMUM_SALARY);
    },
    checkForDuplicatesInArray: function (array) {
        return (new Set(array)).size !== array.length;
    },
    uniqueIDAssigner:{
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

}











itemStorage.set('women',[]).set('man',[]).set('children',[]).set('sport', []).set('bags', []).set('shoes', []);

const TITLE_WOMAN = ['Дамски панталон', 'Рокля', 'Дамска блуза с къс ръкав', '']

class Item {
    constructor(title, imgSrc, size){
        this.title = title;
        this.size = size;
        this.delivery = '48 часа';
        this.quantity = Math.ceil(Math.random() * 10);
        this.id = uniqueIDAssigner.getUnicueID();
    }
}