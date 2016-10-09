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

var c1 = new Audio("piano/c1.ogg");
var cSharp1 = new Audio("piano/cSharp1.ogg");
var d1 = new Audio("piano/d1.ogg");
var dSharp1 = new Audio("piano/dSharp1.ogg");
var e1 = new Audio("piano/e1.ogg");
var f1 = new Audio("piano/f1.ogg");
var fSharp1 = new Audio("piano/fSharp1.ogg");
var g1 = new Audio("piano/g1.ogg");
var gSharp1 = new Audio("piano/gSharp1.ogg");
var a1 = new Audio("piano/a1.ogg");
var aSharp1 = new Audio("piano/aSharp1.ogg");
var b1 = new Audio("piano/b1.ogg");
var c2 = new Audio("piano/c2.ogg");
var cSharp2 = new Audio("piano/cSharp2.ogg");
var d2 = new Audio("piano/d2.ogg");
var dSharp2 = new Audio("piano/dSharp2.ogg");
var e2 = new Audio("piano/e2.ogg");
var f2 = new Audio("piano/f2.ogg");
var fSharp2 = new Audio("piano/fSharp2.ogg");
var g2 = new Audio("piano/g2.ogg");
var gSharp2 = new Audio("piano/gSharp2.ogg");
var a2 = new Audio("piano/a2.ogg");
var aSharp2 = new Audio("piano/aSharp2.ogg");
var b2 = new Audio("piano/b2.ogg");
var c3 = new Audio("piano/c3.ogg");

var c1Sustained = new Audio("piano/Sustained/c1.ogg");
var cSharp1Sustained = new Audio("piano/Sustained/cSharp1.ogg");
var d1Sustained = new Audio("piano/Sustained/d1.ogg");
var dSharp1Sustained = new Audio("piano/Sustained/dSharp1.ogg");
var e1Sustained = new Audio("piano/Sustained/e1.ogg");
var f1Sustained = new Audio("piano/Sustained/f1.ogg");
var fSharp1Sustained = new Audio("piano/Sustained/fSharp1.ogg");
var g1Sustained = new Audio("piano/Sustained/g1.ogg");
var gSharp1Sustained = new Audio("piano/Sustained/gSharp1.ogg");
var a1Sustained = new Audio("piano/Sustained/a1.ogg");
var aSharp1Sustained = new Audio("piano/Sustained/aSharp1.ogg");
var b1Sustained = new Audio("piano/Sustained/b1.ogg");
var c2Sustained = new Audio("piano/Sustained/c2.ogg");
var cSharp2Sustained = new Audio("piano/Sustained/cSharp2.ogg");
var d2Sustained = new Audio("piano/Sustained/d2.ogg");
var dSharp2Sustained = new Audio("piano/Sustained/dSharp2.ogg");
var e2Sustained = new Audio("piano/Sustained/e2.ogg");
var f2Sustained = new Audio("piano/Sustained/f2.ogg");
var fSharp2Sustained = new Audio("piano/Sustained/fSharp2.ogg");
var g2Sustained = new Audio("piano/Sustained/g2.ogg");
var gSharp2Sustained = new Audio("piano/Sustained/gSharp2.ogg");
var a2Sustained = new Audio("piano/Sustained/a2.ogg");
var aSharp2Sustained = new Audio("piano/Sustained/aSharp2.ogg");
var b2Sustained = new Audio("piano/Sustained/b2.ogg");
var c3Sustained = new Audio("piano/Sustained/c3.ogg");


var sustain = false;

function toggleSustainStatus(){
    sustain = !sustain;
}

var playingNotes = {}

var findNoteFromEvent = function(event) {
    var keyCode = event.which || event.keyCode;
    var key = keyCodeToKey[keyCode + 32] || keyCodeToKey[keyCode]; // it seems that keyup / keydown have values 32 below keypress, which it looks like the keycodes were based on
    if (!key) {
        console.log('Key ' + key + ' does not correspond to a note.');
        return null;
    }
    return keyToNote[key];
}


$(document).on('keydown', function(event) {

    var note = findNoteFromEvent(event);
    if (note && !playingNotes[note]) {
        playingNotes[note] = true;
        var noteAudio = new Audio('piano/' + note + '.ogg');
        var noteAudioSustained = new Audio('piano/Sustained/' + note + '.ogg');

        if (noteAudio && sustain == true) {
            noteAudioSustained.play();
        } else{
            noteAudio.play();
        }
    }
});



$(document).on('keyup', function(event) {
    var note = findNoteFromEvent(event);
    delete playingNotes[note];
});


