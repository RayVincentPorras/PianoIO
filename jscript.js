var keyCodeToKey = {
    '122':'z',
    '115':'s',
    '120':'x',
    '100':'d',
    '99': 'c',
    '118':'v',
    '103':'g',
    '98': 'b', 
    '104':'h',
    '110':'n',
    '106':'j',
    '109':'m',
    '119':'w',
    '51': '3',
    '101':'e',
    '52': '4',
    '114':'r',
    '116':'t',
    '54': '6',
    '121':'y',
    '55': '7',
    '117':'u',
    '56': '8',
    '105':'i',
    '111':'o',
};


var documentKeys = function(event) {
    console.log(event.type, event.which, event.keyCode);

    var keyCode = event.which || event.keyCode; 
    var key = keyCodeToKey[keyCode]; 
    
    switch (key) {
        case 'z':
        	document.getElementById('c1').load();
            document.getElementById('c1').play();
            break;
        case 's':
        	document.getElementById('cSharp1').load();
            document.getElementById('cSharp1').play();
            break;
        case 'x':
        	document.getElementById('d1').load();
            document.getElementById('d1').play();
            break;   
        case 'd':
        	document.getElementById('dSharp1').load();
            document.getElementById('dSharp1').play();
            break;     
        case 'c':
        	document.getElementById('e1').load();
            document.getElementById('e1').play();
            break;
        case 'v':
        	document.getElementById('f1').load();
            document.getElementById('f1').play();
            break;
        case 'g':
        	document.getElementById('fSharp1').load();
        	document.getElementById('fSharp1').play();
        case 'b':
        	document.getElementById('g1').load();
            document.getElementById('g1').play();
            break;
        case 'h':
        	document.getElementById('gSharp1').load();
            document.getElementById('gSharp1').play();
            break;
        case 'n':
        	document.getElementById('a1').load();
            document.getElementById('a1').play();
            break;
        case 'j':
        	document.getElementById('aSharp1').load();
            document.getElementById('aSharp1').play();
            break;
        case 'm':
        	document.getElementById('b1').load();
            document.getElementById('b1').play();
            break;
        case 'w':
        	document.getElementById('c2').load();
            document.getElementById('c2').play();
            break;
        case '3':
        	document.getElementById('cSharp2').load();
            document.getElementById('cSharp2').play();
            break;            
        case 'e':
        	document.getElementById('d2').load();
            document.getElementById('d2').play();
            break;   
        case '4':
        	document.getElementById('dSharp2').load();
            document.getElementById('dSharp2').play();
            break;                
        case 'r':
        	document.getElementById('e2').load();
            document.getElementById('e2').play();
            break;
        case 't':
        	document.getElementById('f2').load();
            document.getElementById('f2').play();
            break;
        case '6':
        	document.getElementById('fSharp2').load();
            document.getElementById('fSharp2').play();
            break;            
        case 'y':
        	document.getElementById('g2').load();
            document.getElementById('g2').play();
            break;
        case '7':
        	document.getElementById('gSharp2').load();
            document.getElementById('gSharp2').play();
            break;            
        case 'u':
        	document.getElementById('a2').load();
            document.getElementById('a2').play();
            break;
        case '8':
        	document.getElementById('aSharp2').load();
            document.getElementById('aSharp2').play();
            break;            
        case 'i':
        	document.getElementById('b2').load();
            document.getElementById('b2').play();
            break;
        case 'o':
        	document.getElementById('c3').load();
            document.getElementById('c3').play();
            break;
        default:

    }
};

$(document).on('keydown keyup keypress', documentKeys);
