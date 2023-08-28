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

function cloze_it() {
    i = 0;

    let text = document.getElementById("the_text");
    let difficulty = document.getElementById("difficulty");
    let clozed = document.getElementById("clozed");

    let original = text.value.replace(/(\r\n|\n|\r)/g, ' <br> ').split(' ');
    



    for (var i = 0; i < original.length; i += 1) {
        if (original[i] != "<br>" && original[i].substr(0, 1) != '[') {
            if (Math.floor(Math.random() * 100) > Math.floor(parseInt(difficulty.value))) {
                original[i] = "<span class='cloze'><span class='original'>" + original[i] + "</span><span class='clozed'>" + '_'.repeat(original[i].length) + "</span></span>";
               // console.log(original[i]);
            }
        }

    }

    clozed.innerHTML = "<code><pre>" + original.join(' ') + "</code></pre>";
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
    tog();
    cloze_it();
}

function next() {
    let difficulty = document.getElementById("difficulty");
    let clozed = document.getElementById("clozed");

    if (parseInt(difficulty.value) <= 10) {
        clozed.innerHTML = "DONE!";
    } else {
        difficulty.value = parseInt(difficulty.value) - 10;
        cloze_it();
    }
}


