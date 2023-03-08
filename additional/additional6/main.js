// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str, n) {
    let result = [];
    for (let i = 0; i < str.length; i += n) {
        result.push(str.substr(i, n))
    }
    return result;
}

document.writeln(cutString(`наслаждение`, 3))

//Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str = `Каждый охотник желает знать`;
function delete_characters (str) {
    return str.slice(0, 6);
    }

document.writeln(delete_characters(str))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str1 = "HTML JavaScript PHP"
function insert_dash(str) {

    let result = str.toUpperCase().replaceAll(" ", "-")
    return result

}
document.writeln(insert_dash(str1));

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр
// першого символу рядка з нижнього регістру у верхній.

function firstLetter (str) {
    return str[0].toUpperCase() + str.slice(1);

}

console.log(firstLetter("hello world"));
console.log(firstLetter("javascript"));

// Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

function norm () {

    str = `${n1.replaceAll("..", " ")} ` + `${n2.replaceAll("---", " ")} ` + `${n3.replaceAll("__", " ")}`;
    return str
}

console.log(norm())

// створити функцію, яка генерує масив
// рандомних числових цілих значень в діапазоні від 0 до 100.

function random (length) {
    let array = [];

    for (let i = 0; i < length; i++) {

        let nums = Math.floor(Math.random() * 100);
        array.push(nums);
    }
    return array;

}

let randomNums = random(100);

// створити (або згенерувати, за допомоги попередньої функції) масив
// рандомних цілих числових значень. Відсортувати його за допомоги sort

let sortNums =  randomNums.sort((a, b) => {
    return a - b;

})
console.log(sortNums);

// створити (або згенерувати, за допомоги попередньої функції)
// масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let filter = randomNums.filter(num => num % 2 === 0);

console.log(filter);

//

coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let filter1 = coursesArray.sort((a, b) => {

    return b.monthDuration - a.monthDuration;

})
console.log(filter1);

// cтворити масив книжок (назва, кількість сторінок, автори , жанри).

let books =[
    {title: "Auschwitz: The Nazis and The Final Solution", page: 687, genre: "history",
        Author: [
            {name: "Lawrence Rice", Age: 50}]},
    {title: "IT", page: 1138, genres : [ "horror", "fantasy" ],
        Author: [
            {name: "Stephen King", Age: 75}]},
    {title: "Harry Potter and Deathly Hallows", page: 704, genre: "fantasy literature",
        Author: [
            {name: "Joanne Rowling"}]},

    ]
// знайти наібльшу книжку.

let maxBook = [];
let maxPage = 0;

for (let i = 0; i < books.length; i++) {
    if (books[i].page > maxPage){
        maxPage = books[i].page;
        maxBook.push(books[i]);
    }
}
console.log(maxBook);
console.log(maxPage);
