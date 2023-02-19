// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = "hello world";
console.log(str.concat());
console.log(str.length)

let str1 = "lorem ipsum";
console.log(str1.concat(""));
console.log(str1.length)

let str2 = "javascript is cool";
console.log(str2.concat());
console.log(str2.length)

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str3 = "hello world";
console.log(str3.toUpperCase())
let str4 = "lorem ipsum";
console.log(str4.toUpperCase())
let str5 = "javascript is cool";
console.log(str5.toUpperCase())

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str3.toLowerCase());
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   '
// Почистити її від зайвих пробілів.

let string = ' dirty string   '
console.log(string.replaceAll(" ", ""));
console.log(string.replace("ys", "y s"))

//Напишіть функцію stringToarray(str),
// яка перетворює рядок на масив слів

let str7 = 'Ревуть воли як ясла повні';

let arr = str7.split(" ");
console.log(arr)

function stringToarray (str){
    return str.split(" ")
}

console.log(stringToarray(str7))

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map
// перетворити всі об'єкти в масиві на стрінгові.

let num = [10,8,-7,55,987,-1011,0,1050,0];

let map = num.map(value => {
    return value
})
console.log(map);

// створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
// let nums = [11,21,3];

let nums = [11,21,3];

let sortNums = nums.sort((a, b)=>{
    return b - a;
})
console.log(sortNums)

let sortNums1 = nums.sort((a, b)=> {
    return a - b;
})
console.log(sortNums1);

let courses = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//відсортувати його за спаданням за monthDuration

courses.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
})
console.log((courses))

// відфільтрувати , залишивши тільки курси з тривалістю
// більше 5 місяців

let filter = courses.filter( value => value.monthDuration > 5)
console.log(filter)

// за допомоги map перетворити кожен елемент
// на наступний тип {id,title,monthDuration}

let map1 = courses.map(function (value, index) {
    return {
        title: value.title,
        monthDuration: value.monthDuration,
        id: index + 1
    }
});
console.log(map1);

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
deck = [
    { cardSuit: "spade", value: '6', color: "black" },
    { cardSuit: "spade", value: '7', color: "black" },
    { cardSuit: "spade", value: '8', color: "black" },
    { cardSuit: "spade", value: '9', color: "black" },
    { cardSuit: "spade", value: '10', color: "black" },
    { cardSuit: "spade", value: 'jack', color: "black" },
    { cardSuit: "spade", value: 'queen', color: "black" },
    { cardSuit: "spade", value: 'king', color: "black" },
    { cardSuit: "spade", value: 'ace', color: "black" },
    { cardSuit: "diamond", value: '6', color: 'red' },
    { cardSuit: "diamond", value: '7', color: 'red' },
    { cardSuit: "diamond", value: '8', color: 'red' },
    { cardSuit: "diamond", value: '9', color: 'red' },
    { cardSuit: "diamond", value: '10', color: 'red' },
    { cardSuit: "diamond", value: 'jack', color: 'red' },
    { cardSuit: "diamond", value: 'queen', color: 'red' },
    { cardSuit: "diamond", value: 'king', color: 'red' },
    { cardSuit: "diamond", value: 'ace', color: 'red' },
    { cardSuit: "heart", value: '6', color: 'red' },
    { cardSuit: "heart", value: '7', color: 'red' },
    { cardSuit: "heart", value: '8', color: 'red' },
    { cardSuit: "heart", value: '9', color: 'red' },
    { cardSuit: "heart", value: '10', color: 'red' },
    { cardSuit: "heart", value: 'jack', color: 'red' },
    { cardSuit: "heart", value: 'queen', color: 'red' },
    { cardSuit: "heart", value: 'king', color: 'red' },
    { cardSuit: "heart", value: 'ace', color: 'red' },
    { cardSuit: "club", value: '6', color: 'black' },
    { cardSuit: "club", value: '7', color: 'black' },
    { cardSuit: "club", value: '8', color: 'black' },
    { cardSuit: "club", value: '9', color: 'black' },
    { cardSuit: "club", value: '10', color: 'black' },
    { cardSuit: "club", value: 'jack', color: 'black' },
    { cardSuit: "club", value: 'queen', color: 'black' },
    { cardSuit: "club", value: 'king', color: 'black' },
    { cardSuit: "club", value: 'ace', color: 'black' },
]

// знайти піковий туз
let splice = deck.splice(8,1);
console.log(splice);
let splice1 = deck.splice(16, 1);
console.log(splice1);

// всі червоні карти


let filter2 = deck.filter(d => d.color.includes("red"));
console.log(filter2);

//всі буби

let filter3 = deck.filter(value => value.cardSuit.includes("heart"));
console.log(filter3);

// всі трефи від 9 та більше

let splice2 = deck.splice(28, 7);
console.log(splice2);

// Взяти описану колоду карт, та за допомоги reduce
// упакувати всі карти по "мастях" в об'єкт



console.log(deck.reduce((accumulator, value) => {
    if (value.cardSuit === "spade") {
        accumulator.spades.push(value);
    }else if (value.cardSuit === "diamond") {
        accumulator.diamonds.push(value);
    } else if (value.cardSuit === "heart") {
        accumulator.hearts.push(value);
    } else if (value.cardSuit === "club") {
        accumulator.clubs.push(value);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []} ))

// написати пошук всіх об'єктів, в який в modules є sass
// написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
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

let sass1 = coursesArray.filter(value =>
value.modules.includes("sass"))

console.log(sass1);

let docker1 = coursesArray.filter(value =>
    value.modules.includes("docker"))

console.log(docker1);