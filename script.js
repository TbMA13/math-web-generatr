const elem = document.documentElement;
let correctly;
var FirstNumber;
let LastNumber;
let add;
let sub;
let multi;
let division;
let actionsCount;
let examplesCount;
window.onload = function () {
    let data = new Date;
    let hours = data.getHours();
    let helloText = document.getElementById("HelloTitlle");

    if (4 <= (hours) & (hours) <= 8) {
        helloText.innerHTML = 'Доброе утро!';
    } else if (9 <= hours & hours <= 17) {
        helloText.innerHTML = 'Добрый день!';
    } else if (18 <= hours & hours <= 22) {
        helloText.innerHTML = 'Добрый день!';
    } else if (23 <= hours || hours <= 3 || hours == 0) {
        helloText.innerHTML = 'Доброй ночи!';
    }
}

//генерирование с проверкой корректности
function FullScreen(element) {
    let TempCount = 0;
    console.log('-----')
    if (ChangeNumbersSize()) {
        TempCount += 1
    }
    if (ChangeActions()) {
        TempCount += 1
    }
    if (ActionsCount()) {
        TempCount += 1
    }
    if (ExamplesCount()) {
        TempCount += 1
    }
    if (TempCount == 4) {
        FirstNumber = document.getElementById('FirstNumber').value;
        LastNumber = document.getElementById('LastNumber').value;
        add = document.getElementById('add').checked;
        sub = document.getElementById('sub').checked;
        multi = document.getElementById('multi').checked;
        division = document.getElementById('division').checked;
        actionsCount = document.getElementById('CountActionsInput').value;
        examplesCount = document.getElementById('CountExamples').value;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitrequestFullscreen) {
            element.webkitRequestFullscreen();
        }
        // else
        // if (element.mozRequestFullscreen) {
        //     element.mozRequestFullScreen();
        // }
        document.getElementById('container').style.display = 'none';
        document.getElementById('case').style.display = 'flex'
    }
}
//генерирование с проверкой корректности


//таблица умножения
function MultiTable() {
    // console.log(add);
}
//таблица умножения


// проверка диапазона чисел
function ChangeNumbersSize() {
    let First = document.getElementById('FirstNumber').value;
    let Last = document.getElementById('LastNumber').value;

    document.getElementById('FirstNumber').classList = '';
    document.getElementById('LastNumber').classList = '';

    if (First > Last || First == '' || Last == '' || First != Math.trunc(First) || Last != Math.trunc(Last)) {
        document.getElementById('FirstNumber').classList.add('incorrectly');
        document.getElementById('LastNumber').classList.add('incorrectly');
        // console.log('Диапазон неверный');
    }
    return (First <= Last);
}
// проверка диапазона чисел


// проверка выбора действий 
function ChangeActions() {
    let add = document.getElementById('add').checked;
    let sub = document.getElementById('sub').checked;
    let multi = document.getElementById('multi').checked;
    let division = document.getElementById('division').checked;

    for (let label of document.getElementById('ChangeActions').getElementsByTagName('label')) {
        label.classList = '';
    }

    if (add == sub == multi == division & add == false) {
        for (let label of document.getElementById('ChangeActions').getElementsByTagName('label')) {
            label.classList.add('incorrectly')
        }
        // console.log('Не выбраны действия')
    }
    return (!(add == sub == multi == division & add == false));
}
// проверка выбора действий 


// проверка количества действий
function ActionsCount() {
    let ActionsCount = document.getElementById('CountActionsInput').value;

    document.getElementById('CountActionsInput').classList = '';

    if (ActionsCount < 1 || ActionsCount != Math.trunc(ActionsCount) || ActionsCount == '') {
        document.getElementById('CountActionsInput').classList.add('incorrectly')
        // console.log('Неверное количество действий')
    }
    return (ActionsCount >= 1 && ActionsCount == Math.trunc(ActionsCount));
}
// проверка количества действий


// проверка количества примеров
function ExamplesCount() {
    let count = document.getElementById('CountExamples').value;
    document.getElementById('CountExamples').classList = '';
    if (count < 1 || Math.trunc(count) != count) {
        document.getElementById('CountExamples').classList.add('incorrectly')
        // console.log('Неверное количество примеров')
    }
    return (count >= 1 && Math.trunc(count) == count);
}
// проверка количества примеров

