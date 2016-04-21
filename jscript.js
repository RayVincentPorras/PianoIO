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

var keyToNote = {
    'z':'c1',
    's':'cSharp1',
    'x':'d1',
    'd':'dSharp1',
    'c':'e1',
    'v':'f1',
    'g':'fSharp1',
    'b':'g1',
    'h':'gSharp1',
    'n':'a1',
    'j':'aSharp1',
    'm':'b1',
    'w':'c2',
    '3':'cSharp2',
    'e':'d2',
    '4':'dSharp2',
    'r':'e2',
    't':'f2',
    '6':'fSharp2',
    'y':'g2',
    '7':'gSharp2',
    'u':'a2',
    '8':'aSharp2',
    'i':'b2',
    'o':'c3',
}

var documentKeys = function(event) {
    console.log(event.type, event.which, event.keyCode);

    var keyCode = event.which || event.keyCode;
    var key = keyCodeToKey[keyCode + 32]; // it seems that keyup / keydown have values 32 below keypress, which it looks like the keycodes were based on
    if (!key) {
        console.log('Key ' + key + ' does not correspond to a note.')
    }

    var note = keyToNote[key];
    if (note) {
        var noteElement = $('#' + note)[0];
        if (noteElement) {
            noteElement.load();
            noteElement.play();
        }
    }
};

$(document).on('keydown keyup', documentKeys);
