// створити функцію яка обчислює
// та повертає площу прямокутника зі сторонами а і б
let rec = (a, b) => a + b * 2;
console.log(rec(15, 20))
//


//створити функцію яка обчислює
//та повертає площу кола з радіусом r
let circle = (radius) => {
    let result = 100 / radius;
    console.log(result);
    return 100 / radius;
}
circle(20);
//


//створити функцію яка обчислює
// та повертає площу циліндру висотою h, та радіутом r
let cyl = (h, r) => h * r;
console.log(cyl(12, 8))
//

// створити функцію яка приймає масив
// та виводить кожен його елемент

let text = [
    {name: "maks", age: 18},
    {name: "vasya", age: 23},
    {name: "petya", age: 29}
]


let looper = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}
looper(text);

// створити функцію яка створює параграф з текстом.
//  Текст задати через аргумент

let t = (text) => {
    let html =`<div>
<p>${text}</p>


</div>`
    document.write(html)
}
t("loremsd");
t("lorem5");
//


//створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

let foo = (text) => {
    document.write(`<ul>`);

    document.write(`<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
`);

    document.write(`</ul>`)

}
foo("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, obcaecati.",);


//

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let l = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {

        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);

}
l("Lorem ipsum dolor sit amet.")
//


// створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список


let array = [12, "maks", true, false]
let loo1 = (elements) => {
    document.write(`<ul>`)
    for (const element of elements) {

        document.write(`<li>${element}</li>`);
    }

    document.write(`</ul>`)
}
loo1(array)
//

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , ' +
// та виводить їх в документ. Для кожного об'єкту окремий блок.

let array1 = [{id:1, name: "Maks", age: 12 }]
let loo2 = (elements) => {
    document.write(`<div>`)
    for (let element of elements) {

        document.write(`<p>${element.id} ${element.name} ${element.age}</p>`);
    }

    document.write(`</div>`)
}
loo2(array1)
//


// створити функцію яка повертає найменьше число з масиву
let num1 = (numbers) => {
    let basket = numbers[0];

    for (const number of numbers) {
        if (basket > number){
            basket = number
        }
    }
    return basket;
}
console.log(num1([12, 33, 12,8]))
//

// створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let num = [1, 2, 10]
let sum = (arr) => {
    let s = 0;
    for (const number of arr) {
        s += number;
    }
    return s
}
console.log(sum(num));

// створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
swap([11,22,33,44], 0, 1)
function swap (arr, index1, index2) {
    let v1 = arr[index1]
    let v2 = arr[index2];
    arr[index1] = v2;
    arr[index2] = v1;
    return arr;
}

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange (uah, currencies, exitCurrency){

    for (const item of currencies) {
        if (item.currency === exitCurrency){
            return uah/item.value;
        }
    }
    console.log(exchange(exitCurrency))
}
exchange(10000,[{currency:'USD',value: 40},{currency:'EUR',value: 42}, {currency: "GBP", value: 43}], 'USD')
