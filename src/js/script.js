'use strict';

//Task 1

const student = {
    name: 'Vladimir',
    age: 25,
    grade: 100,
};

student.grade = 90;
student.course = 'Front-end';

console.log(student);

//Task 2

const book = {
    title: 'Spare',
    author: 'Prince Harry',
    year: 2023,
};

book.publisher = {
    name: 'Penguin Random House',
    location: 'USA',
};

console.log(book);

//Task 3

const movie = {
    title: 'Barbie',
    director: 'Greta Gerwig',
    year: 2023,
    genre: 'Comedy',
};

for (const key in movie) {
    console.log(`${key} => ${movie[key]}`);
}

//Task 4

const person1 = {
    name: 'Kris',
    age: 33,
    city: 'Odessa',
};

const person2 = {
    name: 'Lena',
    age: 30,
    city: 'Odessa',
};

let isSame = true;

for (const key in person1) {
    if (person1[key] !== person2[key]) {
        console.log(`Свойство ${key} не совпадает: ${person1[key]} !== ${person2[key]}`);
        isSame = false;
    } else {
        console.log(`Свойство ${key} совпадает: ${person1[key]} === ${person2[key]}`);
    }
}

console.log(isSame ? 'Объекты совпадают' : 'Объекты не совпадают');

//Task 5

const animals = [
    { type: 'cat', name: 'Tom' },
    { type: 'dog', name: 'Jack' },
];

const newAnimal = {
    type: 'horse',
    name: 'Bingo',
};

animals.push(newAnimal);

console.log(animals);