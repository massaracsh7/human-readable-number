module.exports =
function toReadable(number) {
   
    let str = number.toString();

    function nameDigit(i) {
        switch (i) {
            case '0':
                return '';
                break;
            case '1':
                return 'one';
                break;
            case '2':
                return 'two';
                break;
            case '3':
                return 'three';
                break;
            case '4':
                return 'four';
                break;
            case '5':
                return 'five';
                break;
            case '6':
                return 'six';
                break;
            case '7':
                return 'seven';
                break;
            case '8':
                return 'eight';
                break;
            case '9':
                return 'nine';
                break;
        }
    }

    function nameTeen(i) {
        switch (i) {
            case '10':
                return 'ten';
                break;
            case '11':
                return 'eleven';
                break;
            case '12':
                return 'twelve';
                break;
            case '13':
                return 'thirteen';
                break;
            case '14':
                return 'fourteen';
                break;
            case '15':
                return 'fifteen';
                break;
            case '16':
                return 'sixteen';
                break;
            case '17':
                return 'seventeen';
                break;
            case '18':
                return 'eighteen';
                break;
            case '19':
                return 'nineteen';
                break;
        }
    }

    function nameTwoDigit(i) {
        switch (i[0]) {
            case '0':
                return '';
                break;
            case '2':
                return 'twenty';
                break;
            case '3':
                return 'thirty';
                break;
            case '4':
                return 'forty';
                break;
            case '5':
                return 'fifty';
                break;
            case '6':
                return 'sixty';
                break;
            case '7':
                return 'seventy';
                break;
            case '8':
                return 'eighty';
                break;
            case '9':
                return 'ninety';
                break;
        }
    }
   

    let result = str.length === 1 ? nameDigit(str) :
        str.length === 2 ? (str[0] === '1' ? nameTeen(str) : nameTwoDigit(str) + ' ' + nameDigit(str[1])) :
        nameDigit(str[0]) + ' hundred' + ' ' + (str[1] === '1' ? nameTeen(str.slice(1)) : nameTwoDigit(str[1]) + ' ' + nameDigit(str[2]));
    
    return str === '0' ? result = 'zero' : result.replace(/\s+/g, ' ').trim();
}



