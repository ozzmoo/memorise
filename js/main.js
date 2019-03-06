var myDickt = {
    "Information technology":"Информационные технологии",
    "Implementation":"Исполнение, Реализация",
    "Convert":"Преобразовать",
    "Store":"Хранить",
    "Protect":"Защищать",
    "Process":"Обрабатывать",
    "Transmit":"Передавать",
    "Retrieve": "Извлекать",
    "Balloon": "Раздуваться, увеличиваться",
    "Encompass": "Охватывать, заключать",
    "Computer hardware": "Аппаратное обеспечение",
    "Disseminate": "Распространять",
    "Information and Communication Technologies": "Информационные и коммуникационные технологии",
    "Umbrella term": "Широкий термин",
    "Convergence": "Сближение, схождение в 1 точке",
    "Claim": "Заявка, утверждение",
    "Ontologically": "По своему происхождению",
    "Game console": "Консоль",
    "Get over": "Преодолевать",
    "Foreseeable": "Обозримый, предсказуемый",
    "Affordable": "Допустимый, по средствам",
    "Refer to": "Относиться к",
    "Shortcoming": "Недостаток, дефект",
    "Satellite receiver": "Спутниковый приемник",
    "Seek": "Искать, разыскивать",
    "Facilitate": "Содействовать, способствовать",
    "Prevalent": "Распространенный, Общепринятый"
};


var invertDickt = function (myDickt) {
    var ret = {};
    for (var key in myDickt) {
        ret[myDickt[key]] = key;
    }
    return ret;
}


var randomProperty = function (object) {
    var keys = Object.keys(object);
    return object[keys[Math.floor(keys.length * Math.random())]];
};


window.onload = function game() {
    var startGame = document.querySelector('.check');
    var ruWord = document.querySelector('.ru_word');
    ruWord.value = randomProperty(myDickt);
    var reversed = invertDickt(myDickt)[ruWord.value];
    var enWord = document.querySelector('.en_word');
    var result = document.querySelector('.result');
    let vocabulary = document.querySelector('.vocabulary');
    

    startGame.onclick = function () {
        if( enWord.value === reversed ){
            result.innerHTML = ruWord.value + '<br>' + reversed;
        }else{
            result.innerHTML = ruWord.value + '<br>' + reversed;
        }
        enWord.value = null;
        game();
        }

    var unitOne = document.querySelector('.unit-one');
    unitOne.onclick = function () {
        var unit;
        $.ajax({
            url: "/voc/unit1.json",
            dataType: "json",
            async: true,
            success: function (msg) {
                unit = msg;
                myDickt = unit;
            }
        });
        vocabulary.innerHTML = '';
        for (var ArrVal in myDickt) {
            vocabulary.innerHTML += '<br>' + myDickt[ArrVal] + ' - ' + ArrVal;
        }

    }
    
    var unitTwo = document.querySelector('.unit-two');
    unitTwo.onclick = function () {
        var unit;
        $.ajax({
            url: "/voc/unit2.json",
            dataType: "json",
            async: true,
            success: function (msg) {
                unit = msg;
                myDickt = unit;
            }
        });
        vocabulary.innerHTML = '';

        for (var ArrVal in myDickt) {
            vocabulary.innerHTML += '<br>' + myDickt[ArrVal] + ' - ' + ArrVal;
        }
    }

    var unitThree = document.querySelector('.unit-three');
    unitThree.onclick = function () {
        var unit;
        $.ajax({
            url: "/voc/unit3.json",
            dataType: "json",
            async: true,
            success: function (msg) {
                unit = msg;
                myDickt = unit;
            }
        });
        vocabulary.innerHTML = '';

        for (var ArrVal in myDickt) {
            vocabulary.innerHTML += '<br>' + myDickt[ArrVal] + ' - ' + ArrVal;
        }
    }


    var unitFour = document.querySelector('.unit-four');
    unitFour.onclick = function () {
        var unit;
        $.ajax({
            url: "/voc/unit4.json",
            dataType: "json",
            async: true,
            success: function (msg) {
                unit = msg;
                myDickt = unit;
            }
        });
        vocabulary.innerHTML = '';

        for (var ArrVal in myDickt) {
            vocabulary.innerHTML += '<br>' + myDickt[ArrVal] + ' - ' + ArrVal;
        }
    }
    
    var unitFive = document.querySelector('.unit-five');
    unitFive.onclick = function () {
        var unit;
        $.ajax({
            url: "/voc/Unit2-1.json",
            dataType: "json",
            async: true,
            success: function (msg) {
                unit = msg;
                myDickt = unit;
            }
        });
        vocabulary.innerHTML = '';

        for (var ArrVal in myDickt) {
            vocabulary.innerHTML += '<br>' + myDickt[ArrVal] + ' - ' + ArrVal;
        }
    }
    
    var unitSix = document.querySelector('.unit-six');
    unitSix.onclick = function () {
        var unit;
        $.ajax({
            url: "/voc/Unit2-2.json",
            dataType: "json",
            async: true,
            success: function (msg) {
                unit = msg;
                myDickt = unit;
            }
        });
        vocabulary.innerHTML = '';

        for (var ArrVal in myDickt) {
            vocabulary.innerHTML += '<br>' + myDickt[ArrVal] + ' - ' + ArrVal;
        }
    }

}

