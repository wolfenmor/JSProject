// створити функцію яка обчислює
// та повертає площу прямокутника зі сторонами а і б
function rec (a, b){
    let result = a + b * 2;
    return result;
}
console.log(rec(15, 20))
//


//створити функцію яка обчислює
//та повертає площу кола з радіусом r
function circle(radius) {
    let result = 100 / radius;
    console.log(result);
    return 100 / radius;
}
circle(20);
//


//створити функцію яка обчислює
// та повертає площу циліндру висотою h, та радіутом r
function cyl (h, r){
    let result = h * r;
    return result;
}
console.log(cyl(12, 8))
//

// створити функцію яка приймає масив
// та виводить кожен його елемент

let text = [
    {name: "maks", age: 18},
    {name: "vasya", age: 23},
    {name: "petya", age: 29}
]


function looper (arr) {
    for (const element of arr) {
        console.log(element);
    }
}
looper(text);

// створити функцію яка створює параграф з текстом.
  //  Текст задати через аргумент

function t (text){
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

function foo (text,) {
    document.write(`<ul>`);

        document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`);

    document.write(`</ul>`)

}
foo("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, obcaecati.",);


//

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    //Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function l (text) {
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
function loo1 (elements){
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
function loo2 (elements){
    document.write(`<div>`)
    for (let element of elements) {

        document.write(`<p>${element}</p>`);
    }

    document.write(`</div>`)
}
loo2(array1)
//


// створити функцію яка повертає найменьше число з масиву



//

// створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let num = [1, 2, 10]
function sum (arr){
    let s = 0;
    for (j = 0; j < arr.length; j++){
        s += arr[j]
    }
    return s
}
console.log(sum(num));