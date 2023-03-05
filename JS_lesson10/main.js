// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. ' +
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let body = document.querySelector(`body`);

let target = document.querySelector(`.target`);

target.addEventListener(`click`, function (){
    let div = document.createElement(`div`);

    div.append(`First name: ${document.forms[0].firstName.value}, Last name: ${document.forms[0].lastName.value}, age: ${document.forms[0].age.value}`);
    body.appendChild(div);

})

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який
// при кожному перезавантажені сторінки буде додавати до неї +1
let count = JSON.parse(localStorage.getItem("count")) || []

if (count && count.length > 0) {
    count = 0;
}
count++;

localStorage.setItem("count", count);

let div1 = document.createElement("div");

div1.append(count);
body.appendChild(div1);

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let now = new Date();
let timeStr = now.toLocaleString();

let sessions = JSON.parse(localStorage.getItem("sessions")) || []
sessions.push(timeStr);

localStorage.setItem("sessions", JSON.stringify(sessions));


// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100

];
let count1 = 0;

let next = document.querySelector(`.next`);

next.addEventListener("click",function (){
    let div2 = document.createElement(`div`);
    let nextTen = nums.slice(count1, count1 += 10);

    div2.append(nextTen.join(", "));
    body.appendChild(div2);

})
let prev = document.querySelector(`.prev`);

prev.addEventListener("click", function (){
    let div3 = document.createElement(`div`);
    let prevTen = nums.slice(count1, count1+10);
    count1 -= 10;
    div3.append(prevTen.join(", "))
    body.appendChild(div3);
});

//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, function () {
    let rows = document.querySelector(".row").value;
    let cells = document.querySelector(".cell").value;
    let text = document.querySelector(".text").value;

    let table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        row.className = "row"

        for (let j = 0; j < cells; j++) {
            let cell = document.createElement("td");
            cell.innerText = text;
            cell.className = "cell"
            row.appendChild(cell);

        }
        table.appendChild(row);
    }
    let container = document.querySelector("#container");
    container.appendChild(table);
})