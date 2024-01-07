'use strict';

const userBirthYear = prompt('В якому році Ви народилися?');
const userCity = prompt('В якому місті Ви проживаєте?');
const userFavoriteSport = prompt('Який Ваш улюблений вид спорту?');

let userAge = new Date().getFullYear() - parseInt(userBirthYear);
let cityMessage = '';
let sportMessage = '';

if (userBirthYear === null) {
    userAge = 'Шкода, що Ви не захотіли ввести дату свого народження.';
}

if (userCity === null) {
    cityMessage = 'Шкода, що Ви не захотіли ввести місто, в якому Ви проживаєте.';
} else if (userCity === 'Київ') {
    cityMessage = 'Ти живеш у столиці України';
} else if (userCity === 'Вашингтон') {
    cityMessage = 'Ти живеш у столиці США';
} else if (userCity === 'Лондон') {
    cityMessage = 'Ти живеш у столиці Англії';
} else {
    cityMessage = 'Ти живеш у місті ' + userCity;
}

if (userFavoriteSport === null) {
    sportMessage = 'Шкода, що ви не захотіли ввести свій улюблений вид спорту.';
} else if (userFavoriteSport === 'Футбол') {
    sportMessage = 'Круто! Хочеш стати Пеле?';
} else if (userFavoriteSport === 'Формула 1') {
    sportMessage = 'Круто! Хочеш стати Шумахером?';
} else if (userFavoriteSport === 'Бокс') {
    sportMessage = 'Круто! Хочеш стати Мейвезером?';
} else {
    sportMessage = 'Твій улюблений вид спорту ' + userFavoriteSport;
}

alert(userAge + '\n' + cityMessage + '\n' + sportMessage);