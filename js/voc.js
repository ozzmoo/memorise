var myDickt = {};



window.onload = function game() {
    let vocabulary = document.querySelector('.vocabulary');

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

