module.exports = function toReadable (number) {
    let firstTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let secondTen = ['eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function getTwoDigitCount(count) {
        if (number % 10 === 0) {
            return tens[(count / 10) - 1];
        } if (count < 20) {
            return secondTen[+count.toString().slice(1) - 1]; 
        } else {
            return tens[count.toString()[0] - 1] + ' ' + firstTen[count.toString()[1]];
        }
    }
    
    function getTreeDigitCount(count) {
        if (number % 100 === 0) {
            return firstTen[count / 100] + ' ' + 'hundred';
        } if (number % 10 === 0) {
            return firstTen[Math.floor(count / 100)] + ' ' + 'hundred' + ' ' + tens[+Math.floor(count / 10).toString().slice(1) - 1];
        } if (+count.toString()[1] === 0) {
            return firstTen[Math.floor(count / 100)] + ' ' + 'hundred' + ' ' + firstTen[+count.toString().slice(2)];
        } else {
            return firstTen[Math.floor(count / 100)] + ' ' + 'hundred' + ' ' + getTwoDigitCount(+count.toString().slice(1));
        }
    }  

    if (number.toString().length === 1) {
        return firstTen[number];
    } if (number.toString().length === 2) {
        return getTwoDigitCount(number);
    } else {
        return getTreeDigitCount(number);
    }
}
