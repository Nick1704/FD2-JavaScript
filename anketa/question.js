"use strict";
let userSurname,
    userName, nameFather,
    yearAge, ageDays,
    result, resultAge, gender, retirement;
while (true) {
    userSurname = prompt('Введите вашу фамилию');
    if (Number(userSurname) !== 0) break;
}
while (true) {
    userName = prompt('Введите имя');
    if (Number(userName) !== 0) break;
}
while (true) {
    nameFather = prompt('Введите отчество');
    if (Number(nameFather) !== 0) break;
}
while (true) {
    yearAge = prompt('Введите ваш возраст');
    if (Number(yearAge) > 0) break;
}
ageDays = yearAge * 365;

resultAge = Number(yearAge) + 5;

result = confirm('Ваш пол - мужской?');
if (result === true) {
    gender = 1;
}
else {
    gender = 2;
}

if (Number(gender) === 1) {
    if (Number(yearAge) >= 63) {
        retirement = 'Да';
    }
    else {
        retirement = 'Нет';
    }
}
if (Number(gender) === 2) {
    if (Number(yearAge) >= 58) {
        retirement = 'Да';
    }
    else {
        retirement = 'Нет';
    }
}

if (Number(gender) === 1) {
    gender = 'мужской';
}
if (Number(gender) === 2) {
    gender = 'женский';
}

alert(`
ваше ФИО: ${userSurname} ${userName} ${nameFather}
ваш возраст в годах:  ${yearAge}
ваш возраст в днях: ${ageDays}
через 5 лет вам будет: ${resultAge}
ваш пол: ${gender}
вы на пенсии: ${retirement}
`);
