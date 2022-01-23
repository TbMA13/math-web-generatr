//TODO добавить сохранение параметров
const elem = document.documentElement;
let FirstNumber = new Number();
let LastNumber = new Number();
let add;
let sub;
let multi;
let division;
let actionsCount;
let examplesCount;
let studentName;

let Actions = [];
let Examples = [];
let Answers = [];
let usersAnswers = [];
let ExampleID = 0;

let printCount = new Number();

window.onload = function () {
    let data = new Date;
    let hours = data.getHours();
    let helloText = document.getElementById("HelloTitlle");

    if (4 <= (hours) && (hours) <= 8) {
        helloText.innerHTML = 'Доброе утро!';
    } else if (9 <= hours && hours <= 17) {
        helloText.innerHTML = 'Добрый день!';
    } else if (18 <= hours && hours <= 22) {
        helloText.innerHTML = 'Добрый вечер!';
    } else if (23 <= hours || hours <= 3 || hours == 0) {
        helloText.innerHTML = 'Доброй ночи!';
    }
}

//генерирование с проверкой корректности
function FullScreen(element) {
    let TempCount = 0;
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
        FirstNumber = Number(document.getElementById('FirstNumber').value);
        LastNumber = Number(document.getElementById('LastNumber').value);
        add = document.getElementById('add').checked;
        sub = document.getElementById('sub').checked;
        multi = document.getElementById('multi').checked;
        division = document.getElementById('division').checked;
        actionsCount = Number(document.getElementById('CountActionsInput').value);
        examplesCount = Number(document.getElementById('CountExamples').value);
        printCount = Number(document.getElementById('versionCount').value);

        let j = 1;
        for (let i of [add, sub, multi, division]) {
            if (i == true) {
                Actions.push(j);
            }
            j++
        }
        document.getElementById('container').style.display = 'none';
        if (printCount != '') {
            PrintCounts();
        } else {
            document.getElementById('case').style.display = 'flex';

            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitrequestFullscreen) {
                element.webkitRequestFullscreen();
            }
            ExamplesGeneration();
        }
    }
}
//генерирование с проверкой корректности


// проверка диапазона чисел
function ChangeNumbersSize() {
    let First = Number(document.getElementById('FirstNumber').value);
    let Last = Number(document.getElementById('LastNumber').value);

    document.getElementById('FirstNumber').classList = '';
    document.getElementById('LastNumber').classList = '';

    if (First == '' || Last == '' || First > Last) {
        document.getElementById('FirstNumber').classList.add('incorrectly');
        document.getElementById('LastNumber').classList.add('incorrectly');
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

    if (sub == false && add == false && multi == false && division == false) {
        for (let label of document.getElementById('ChangeActions').getElementsByTagName('label')) {
            label.classList.add('incorrectly')
        }
    }
    return (!(sub == false && add == false && multi == false && division == false));
}
// проверка выбора действий 


// проверка количества действий
function ActionsCount() {
    let ActionsCount = document.getElementById('CountActionsInput').value;

    document.getElementById('CountActionsInput').classList = '';

    if (ActionsCount < 1 || ActionsCount != Math.trunc(ActionsCount) || ActionsCount == '') {
        document.getElementById('CountActionsInput').classList.add('incorrectly')
    }
    return ((ActionsCount >= 1) && (ActionsCount == Math.trunc(ActionsCount)));
}
// проверка количества действий


// проверка количества примеров
function ExamplesCount() {
    let count = document.getElementById('CountExamples').value;
    document.getElementById('CountExamples').classList = '';
    if (count < 1 || Math.trunc(count) != count) {
        document.getElementById('CountExamples').classList.add('incorrectly')
    }
    return (count >= 1 && Math.trunc(count) == count);
}
// проверка количества примеров



// !Печать
function PrintCounts() {
    document.getElementById('body').style.background = 'white'
    document.getElementById('body').style.width = 'auto';
    document.getElementById('body').style.height = 'auto';
    document.getElementById('containerToPrint').style.display = 'flex';
    for (let i = 0; i < printCount; i++) {
        document.getElementById('printExamples').innerHTML += "<div class='printBlocks'><h2>Вариант " + (i + 1) + "</h2></div>";
        document.getElementById('printAnswers').innerHTML += "<div class='printBlocksAnswers'><h2>Вариант " + (i + 1) + "</h2></div>";
        Answers = [];
        Examples = [];
        ExamplesGeneration();
        for (let j = 0; j < Examples.length; j++) {
            let LastPrintBlock = document.getElementsByClassName('printBlocks')[(document.getElementsByClassName('printBlocks').length) - 1];
            let LastPrintBlockAnswers = document.getElementsByClassName('printBlocksAnswers')[(document.getElementsByClassName('printBlocksAnswers').length) - 1];
            LastPrintBlock.innerHTML += '<div><p class="printExampleNumber">' + (j + 1) + ')</p><p class="printExample">' + (Examples[j]) + '=</p><div id="input"></div><div id="check"></div></div>';
            LastPrintBlockAnswers.innerHTML += '<div><p class="printExampleNumber">' + (j + 1) + ') ' + (Answers[j]) + '</p></div>';
        }
    }
}


// !Вывод примеров
function ExamplesStart() {
    studentName = document.getElementById('StudentNameInput').value;
    if (document.getElementById('StudentName').value != '') {
        document.getElementById('caseBlock').style.display = 'none';
        document.getElementById('ExamplesBlock').style.display = 'flex';

        document.getElementById('StudentName').innerText = studentName;
        document.getElementById('ExampleNumber').innerText = ExampleID + 1;
        document.getElementById('remainder').innerHTML = (examplesCount - 1);

        document.getElementById('realProgress').style.width = (document.getElementById('progress').offsetWidth / examplesCount) + 'px';
        document.getElementById("Example").innerText = Examples[ExampleID] + ' =';
    }
}
// Вывод примеров

function NextExample() {
    if (document.getElementById('ExampleInput').value != '' && document.getElementById('remainder').innerText >= 1) {
        ExampleID += 1;
        usersAnswers.push(document.getElementById('ExampleInput').value);
        document.getElementById('ExampleInput').value = '';

        document.getElementById('ExampleNumber').innerText = ExampleID + 1;
        document.getElementById('remainder').innerHTML = (examplesCount - (ExampleID + 1));

        document.getElementById('Example').innerText = Examples[ExampleID] + ' =';

        document.getElementById('realProgress').style.width = document.getElementById('realProgress').offsetWidth + (document.getElementById('progress').offsetWidth / examplesCount) + 'px';
    } else if (document.getElementById('ExampleInput').value != '' && document.getElementById('remainder').innerText == 0) {
        usersAnswers.push(document.getElementById('ExampleInput').value);
        document.getElementById('ExampleInput').value = '';
        AnswersView();
    }
}

function AnswersView() {
    document.getElementById('ExamplesBlock').style.display = 'none';
    document.getElementById('AnswersBlock').style.display = 'flex';
    document.getElementById('StudentName2').innerText = studentName;
    for (let i = 0; i < Examples.length; i++) {
        document.getElementById('AnswersBlock').innerHTML += '<div><p class="Number">' + (i + 1) + '</p><p class="ExamplesList">' + (Examples[i]) + '</p><p class="UserAnswer">' + (usersAnswers[i]) + '</p><p class="CorrectAnswer">' + (Answers[i]) + '</p></div>';
        if ((document.getElementsByClassName('UserAnswer')[(document.getElementsByClassName('UserAnswer').length) - 1].innerText) != (document.getElementsByClassName('CorrectAnswer')[(document.getElementsByClassName('CorrectAnswer').length) - 1].innerText)) {
            (document.getElementsByClassName('UserAnswer')[(document.getElementsByClassName('UserAnswer').length) - 1]).style.color = "#ff0000";
        } else {
            (document.getElementsByClassName('UserAnswer')[(document.getElementsByClassName('UserAnswer').length) - 1]).style.color = "#22f50f";
        }
    }
    document.getElementById('case').style.height = 'auto';
    document.getElementById('case').style.margin = '40px 0';
}

// !Генерация примеров
function ExamplesGeneration() {
    while (Examples.length < examplesCount) {
        document.getElementById('ExampleNumber').innerText = 1;
        let tempExample = '';
        let tempExampleMath = '';

        let lastAction = '';
        let lastNumber = '';

        let tempNumber = '';
        let tempAction = '';
        for (let j = 1; j <= actionsCount; j++) {
            if (lastAction != 4) {
                tempNumber = getRandomIntInclusive(FirstNumber, LastNumber);
                let k = 0;
                while (k <= 10 && tempNumber == 1) {
                    tempNumber = getRandomIntInclusive(FirstNumber, LastNumber);
                }
            }
            tempAction = Actions[getRandomIntInclusive(1, Actions.length) - 1];
            let k = 0;
            while ((lastAction == tempAction && k <= 10) || ((lastAction == 4) && (tempAction == 4) && k <= 10)) {
                tempAction = Actions[getRandomIntInclusive(1, Actions.length) - 1];
                k++;
            }
            if (tempAction == 3 || lastAction == 3) {
                if (FirstNumber < 0) {
                    if (FirstNumber >= -99) {
                        if (LastNumber <= 99) {
                            tempNumber = getRandomIntInclusive(FirstNumber, LastNumber);
                        } else {
                            tempNumber = getRandomIntInclusive(FirstNumber, 99);
                        }
                    } else {
                        if (LastNumber <= 99) {
                            tempNumber = getRandomIntInclusive(-99, LastNumber);
                        } else {
                            tempNumber = getRandomIntInclusive(-99, 99);
                        }
                    }
                } else if (FirstNumber >= 0) {
                    if (LastNumber <= 99) {
                        tempNumber = getRandomIntInclusive(1, LastNumber);
                    } else {
                        tempNumber = getRandomIntInclusive(1, 99);
                    }
                }
            }
            if (lastAction == 4) {
                tempNumber = dividerFind(Math.abs(lastNumber));
            }

            lastNumber = tempNumber;
            lastAction = tempAction;

            if (tempNumber < 0) {
                tempNumber = '(' + tempNumber + ')';
            }
            tempExampleMath += (String(tempNumber) + ' ' + getStringActionMath(tempAction) + ' ');
            tempExample += (String(tempNumber) + ' ' + getStringAction(tempAction) + ' ');
        }

        tempNumber = getRandomIntInclusive(FirstNumber, LastNumber);
        if (tempAction == 3 || lastAction == 3) {
            if (FirstNumber < 0) {
                if (FirstNumber >= -99) {
                    if (LastNumber <= 99) {
                        tempNumber = getRandomIntInclusive(FirstNumber, LastNumber);
                    } else {
                        tempNumber = getRandomIntInclusive(FirstNumber, 99);
                    }
                } else {
                    if (LastNumber <= 99) {
                        tempNumber = getRandomIntInclusive(-99, LastNumber);
                    } else {
                        tempNumber = getRandomIntInclusive(-99, 99);
                    }
                }
            } else if (FirstNumber >= 0) {
                if (LastNumber <= 99) {
                    tempNumber = getRandomIntInclusive(1, LastNumber);
                } else {
                    tempNumber = getRandomIntInclusive(1, 99);
                }
            }
        }
        if (lastAction == 4) {
            tempNumber = dividerFind(Math.abs(lastNumber));
        }
        if (tempNumber < 0) {
            tempExample += '(' + tempNumber + ')';
            tempExampleMath += '(' + tempNumber + ')';
        } else {
            tempExample += tempNumber;
            tempExampleMath += tempNumber;
        }
        if ((FirstNumber >= 0 && eval(tempExampleMath) >= 0) || FirstNumber < 0) {
            Examples.push(tempExample);
            Answers.push(eval(tempExampleMath));
        }
    }
}

function getRandomIntInclusive(min, max) {
    let count = 0;
    let rez;
    min = Math.ceil(min);
    max = Math.floor(max);
    rez = Math.floor(Math.random() * (max - min + 1)) + min;
    while (rez == 0 && count < 10) {
        min = Math.ceil(min);
        max = Math.floor(max);
        rez = Math.floor(Math.random() * (max - min + 1)) + min;
        count += 1
    }
    return rez
}

function getStringAction(action) {
    switch (action) {
        case 1:
            return '+';
            break;
        case 2:
            return '-';
            break;
        case 3:
            return '×';
            break;
        case 4:
            return '÷';
            break;
    }
}

function getStringActionMath(action) {
    switch (action) {
        case 1:
            return '+';
            break;
        case 2:
            return '-';
            break;
        case 3:
            return '*';
            break;
        case 4:
            return '/';
            break;
    }
}

function dividerFind(n) {
    let dividers = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            dividers.push(i);
        }
    }
    if (dividers == []) {
        return n;
    } else {
        let temp = dividers[getRandomIntInclusive(1, dividers.length) - 1];
        let k = 1;
        while ((temp == 0 || temp == 1 || temp == -1 || temp == n) && (k <= 10)) {
            temp = dividers[getRandomIntInclusive(1, dividers.length) - 1];
            k += 1
        }
        return (temp);
    }

}
// Генерация примеров