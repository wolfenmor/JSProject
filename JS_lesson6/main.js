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

let filter = courses.filter( value => value.monthDuration >= 5)
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