window.onload = function () {
    let data = new Date;
    let hours = data.getHours()
    let helloText = document.getElementById("hello_title");
    if (4 <= (hours) & (hours) <= 8) {
        helloText.innerHTML = 'Доброе утро!';
    } else if (9 <= hours & hours <= 17) {
        helloText.innerHTML = 'Добрый день!';
    } else if (18 <= hours &  hours <= 22) {
        helloText.innerHTML = 'Добрый день!';
    } else if (23 <= hours || hours <= 3 || hours == 0) {
        helloText.innerHTML = 'Доброй ночи!';
    }
}