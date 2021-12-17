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


function FullScreen(element) {
    if (ChangeNumbersSize() && ChangeActions) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitrequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullscreen) {
            element.mozRequestFullScreen();
        }
    }
}

function MultiTable() {

}

function ChangeNumbersSize() {
    if (((document.getElementById('FirstNumber').value) > (document.getElementById('LastNumber').value))){
        console.log('Диапазон неверный')
    }
    return ((document.getElementById('FirstNumber').value) <= (document.getElementById('LastNumber').value));
}
function ChangeActions() {
    let temp = document.getElementsByClassName('Action')
    console.log(temp)
}