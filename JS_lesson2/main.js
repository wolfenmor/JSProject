//!! Cтворити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let names = ["James", "Lily", "Sirius", "Harry", "Lupin", "Germione", "Ron", "Cho", "Severus", "Dumbledore"]
console.log(names.length)
console.log(names);
//

//!! Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let Harry5 ={
    title: "Harry Potter and Order of Phoenix",
    Pages: 766,
    genre: "fantasy literature"
}
console.log(Harry5);

let Harry3 ={
    title: "Harry Potter and Prisoner of Azkaban",
    Pages: 317,
    genre: "fantasy literature"
}
console.log(Harry3);
let Harry4 ={
    title: "Harry Potter and the Goblet of Fire",
    Pages: 636,
    genre: "fantasy literature"
}
console.log(Harry4);
//

//!! Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let Auschwitz ={
    title: "Auschwitz: The Nazis and The Final Solution",
    Pages: 687,
    genre: "History",
    Author: [
        {name: "Lawrence Rice",
            Age: 50
        }
    ]
}
console.log(Auschwitz);

let IT ={
    title: "IT",
    Pages: 1138,
    genre: "Horror",
    Author: [
        {name: "Stephen King",
            Age: 75
        }
    ]
}
console.log(IT);

let Harry7 ={
    title: "Harry Potter and Deathly Hallows",
    Pages: 704,
    genre: "fantasy literature",
    Author:{
        Name: "Joanne Rowling",
        Age: 57
    }
}
console.log(Harry7);
//

//!! Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let Users =[
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
console.log(Users[0].Password);
console.log(Users[1].Password);
console.log(Users[2].Password);
console.log(Users[3].Password);
console.log(Users[4].Password);
console.log(Users[5].Password);
console.log(Users[6].Password);
console.log(Users[7].Password);
console.log(Users[8].Password);
console.log(Users[9].Password);
//

//!!Логічні розгалуження:
    //!! Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = prompt(`enter a number`);
if (x != +0) {
    console.log("true");

} else {
    console.log("false");
}
console.log(x);
//

