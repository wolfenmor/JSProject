//Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//кількість елементів у масиві більше або дорівнює 3, то
//виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
    if (friends.length >= 3){
        console.log("великий масив")
    }
    else {
        console.log("маленький масив")
    }
// Маємо 3 числа і між ним  нам потрібно знайти те що посередині.

let nums = [12,33,11];

let sortNums = nums.sort((a, b)=>{
    return b - a;
})
console.log(sortNums);
console.log(sortNums[1]);

//Перепишіть конструкцію if
//з використанням умовного оператора '?':

// let result;
// if (a + b < 4) {
  //  result = 'Мало';
// } else {
  //  result = 'Багато';
// }
try {
    result = a + b < 4 ? "мало" : "багато";
} catch (e){
    console.log(e);
}
// Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let num = 98;

    check = num > 0 ? "bigger then 0" : "less then 0"
console.log(check);

// У нас є змінна test, якщо дорівнює true,
 //виведіть 'Вірно', інакше виведіть 'Неправильно'.
let test = false;
check1 = test === true ? "Вірно" : "Неправильно";
console.log(check1);

let str = prompt(`Яка «офіційна» назва JavaScript?`);
if (str === "ECMAScript"){
    console.log("Вірно");
}
else {
    console.log("Неправильно");
}

// У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment = 28;
if (apartment >0 && apartment <=20  ){
    console.log("first");
} else if (apartment >= 21 && apartment <=48 ){
    console.log("second");
} else if ( apartment >=49 && apartment <= 90){
    console.log("third");
}
else{
    console.log("error")
}

// Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = 10;
if (number === 10){
    console.log("ВІРНО")
}
else{
    console.log("НЕВІРНО")
}

//За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.

let lot = 1;

switch (lot){
    case 1:
        console.log("auto")
    break
}
switch (lot) {
    case 2:
        console.log("moto")
        break
}

switch (lot){
    case 3:
        console.log("tour")
        break
}

switch (lot){
    case 4:
        console.log("pet")
        break
}

switch (lot){
    case 5:
        console.log("home")
        break
}
