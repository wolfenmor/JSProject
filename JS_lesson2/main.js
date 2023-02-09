//!! Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let names = ["James", "Lily", "Sirius", "Harry", "Lupin", "Germione", "Ron", "Cho", "Severus", "Dumbledore"]
console.log(names.length)
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//

//!! Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let harry5 ={
    title: "Harry Potter and Order of Phoenix",
    pages: 766,
    genre: "fantasy literature"
}
console.log(harry5);

let harry3 ={
    title: "Harry Potter and Prisoner of Azkaban",
    pages: 317,
    genre: "fantasy literature"
}
console.log(harry3);
let harry4 ={
    title: "Harry Potter and the Goblet of Fire",
    pages: 636,
    genre: "fantasy literature"
}
console.log(harry4);
//

//!! Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let Auschwitz ={
    title: "Auschwitz: The Nazis and The Final Solution",
    Pages: 687,
    genre: "History",
    Author: [
        {name: "Lawrence Rice", Age: 50}
    ]
}
console.log(Auschwitz);

let IT ={
    title: "IT",
    Pages: 1138,
    genre: "Horror",
    Author: [
        {name: "Stephen King", Age: 75}
    ]
}
console.log(IT);

let Harry7 ={
    title: "Harry Potter and Deathly Hallows",
    Pages: 704,
    genre: "fantasy literature",
    Author:[
        {Name: "Joanne Rowling", Age: 57}
    ]
}
console.log(Harry7);
//

//!! Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users =[
    {name: "Leanne Graham", username: "Bred", Password: 18231},
    {name: "Ervin Howell", username: "Antonette", Password: 65334},
    {name: "Clementine Bauch", username: "Samantha", Password: 34522},
    {name: "Patricia Lebsack", username: "Karianne", Password: 75654},
    {name: "Chelsey Dietrich", username: "Kamren", Password: 23425},
    {name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", Password: 34645},
    {name: "Kurtis Weissnat", username: "Elwyn.Skiles", Password: 23657},
    {name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", Password: 78967},
    {name: "Glenna Reichert", username: "Delphine", Password: 75867},
    {name: "Max", username: "kmdc", Password: 65876},


]
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user.Password)
}
//

//!!Логічні розгалуження:
    //!! Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if (x !== 0) {
    console.log("true");

} else {
    console.log("false");
}
console.log(x);
//

//!!Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 23;
if ( time >0 && time <=15 ){
console.log("first quarter")
} else if (time >16 && time <=29){
    console.log("second quarter");
} else if (time >=30 && time <=44){
    console.log("third quarter");
} else if (time >=45 && time <=59){
    console.log("fourth quarter");
}
else {
    console.log("error");
}
//

//!!У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 28;

if (day >0 && day <=10  ){
    console.log("first");
} else if (day >= 11 && day <=20 ){
    console.log("second");
} else if ( day >=21 && day <= 31){
    console.log("third");
}
else{
    console.log("error");
}

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = prompt(`enter day of the week`);
switch (week) {
    case "понедiлок":
        console.log("Monday");
        break

    case "вiвторок":
        console.log("Tuesday");
        break
    case "среда":
        console.log("Wednesday");
         break
    case "четверг":
        console.log("Thursday");
        break
    case "п'ятниця":
        console.log("Friday");
        break
    case "субота":
        console.log("Saturday");
        break
    case "недiля":
        console.log("Sunday");
        break
    default:
        console.log("????????");
}
//

//Користувач вводить або має два числа.
  //  Потрібно знайти та вивести максимальне число з тих двох .
    //Також потрібно врахувати коли введені рівні числа.

let num = 9;
let num1 = 23;

if (num > num1){
    console.log(num);
}
else if (num < num1){
    console.log(num1);
}
else if (num === num1){
    console.log(num, num1);
}




//

//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
  //  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let y = null;
y = y || "default";
console.log(y);
//

//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}

];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const course = coursesAndDurationArray[i];

    if (course.monthDuration >= 5){
        console.log("Super");
    }
    else if (course.monthDuration < 5){
        console.log(":(");
    }
}