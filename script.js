var original = [];
var clozed = [];
var i = 0;

var _to_ascii = {
    '188': '44',
    '109': '45',
    '190': '46',
    '191': '47',
    '192': '96',
    '220': '92',
    '222': '39',
    '221': '93',
    '219': '91',
    '173': '45',
    '187': '61', //IE Key codes
    '186': '59', //IE Key codes
    '189': '45' //IE Key codes
}

var shiftUps = {
    "96": "~",
    "49": "!",
    "50": "@",
    "51": "#",
    "52": "$",
    "53": "%",
    "54": "^",
    "55": "&",
    "56": "*",
    "57": "(",
    "48": ")",
    "45": "_",
    "61": "+",
    "91": "{",
    "93": "}",
    "92": "|",
    "59": ":",
    "39": "\"",
    "44": "<",
    "46": ">",
    "47": "?"
};

function worksheet(iter = 5) {
    
    
    const START_VAL = 100;
    

    let difficulty = START_VAL;
    let worksheet = document.getElementById("worksheet");
    let i = 1;

    worksheet.innerHTML = "";
    while (difficulty >= 0) {

        clozed = "<h1>" + i.toString() + "</h1>" + cloze_it(difficulty);
        worksheet.innerHTML += clozed + "<hr>";
        difficulty = difficulty - (START_VAL / iter);
        i++;
    }



}

function cloze_it(difficulty) {
    i = 0;

    let text = document.getElementById("the_text");

    let original = text.value.replace(/(\r\n|\n|\r)/g, ' <br> ').split(' ');
    



    for (var i = 0; i < original.length; i += 1) {
        if (original[i] != "<br>" && original[i].substr(0, 1) != '[') {
            if (Math.floor(Math.random() * 100) > Math.floor(parseInt(difficulty))) {
                original[i] = "<span class='cloze'><span class='original'>" + original[i] + "</span><span class='clozed'>" + '_'.repeat(original[i].length) + "</span></span>";
               // console.log(original[i]);
            }
        }

    }

    clozed = "<code><pre>" + original.join(' ') + "</code></pre>";
    return clozed;
}

function tog() {
    text = document.getElementById("the_text");
    if (text.classList.contains('hidden')) {
        text.classList.remove('hidden');
        console.log('contains');
    } else {
        text.classList.add('hidden');
        console.log('not contains');
    }
}

function submit() {
    let difficulty = document.getElementById("difficulty");
    let clozed = document.getElementById("clozed");

    tog();
    clozed.innerHTML = cloze_it(difficulty);
}

function next() {
    let difficulty = document.getElementById("difficulty");
    let clozed = document.getElementById("clozed");

    if (parseInt(difficulty.value) <= 10) {
        clozed.innerHTML = "DONE!";
    } else {
        difficulty.value = parseInt(difficulty.value) - 10;
        clozed.innerHTML = cloze_it(difficulty.value);
    }
}


