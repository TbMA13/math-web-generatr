const elem = document.documentElement;
let correctly;
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
    console.log('-----')
    if (ChangeNumbersSize() && (!ChangeActions()) && ActionsCount() && ExamplesCount()) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitrequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullscreen) {
            element.mozRequestFullScreen();
        }
    }
}
//генерирование с проверкой корректности


//таблица умножения
function MultiTable() {}
//таблица умножения


// проверка диапазона чисел
function ChangeNumbersSize() {
    let First = document.getElementById('FirstNumber').value; 
    let Last = document.getElementById('LastNumber').value;
    if (First > Last || First == '' || Last == '') {
        console.log('Диапазон неверный');
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
    if (add == sub == multi == division & add == false) {
        console.log('Не выбраны действия')
    }
    return (add == sub == multi == division & add == false)
}
// проверка выбора действий 


// проверка количества действий
function ActionsCount() {
    let ActionsCount = document.getElementById('CountActionsInput').value; 
    if (ActionsCount < 1 || ActionsCount != Math.trunc(ActionsCount)) {
        console.log('Неверное количество действий')
    } 
    return (ActionsCount >= 1 && ActionsCount == Math.trunc(ActionsCount));
}
// проверка количества действий


// проверка количества примеров
function ExamplesCount() {
    let count = document.getElementById('CountExamples').value
    if (count < 1 || Math.trunc(count) != count) {
        console.log('Неверное количество примеров')
    }
    return count >= 1 && Math.trunc(count) == count
}
// проверка количества примеров