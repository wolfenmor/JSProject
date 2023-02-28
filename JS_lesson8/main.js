// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
 function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users =[
    new User(3, "max", "xaxs","gmail.com", 380543423555),
    new User(9, "petya", "xxx","yohoo.com", 380963221152),
    new User(1, "max", "xaxs","gmail.com", 380543423555),
    new User(8, "max", "xaxs","gmail.com", 380543423555),
    new User(7, "max", "xaxs","gmail.com", 380543423555),
    new User(6, "max", "xaxs","gmail.com", 380543423555),
    new User(5, "max", "xaxs","gmail.com", 380543423555),
    new User(4, "max", "xaxs","gmail.com", 380543423555),
    new User(2, "max", "xaxs","gmail.com", 380543423555),
    new User(10, "max", "xaxs","gmail.com", 380543423555)
]
    console.log(users);
// Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
let filter = users.filter((value) => [2, 4, 6, 8, 10].includes(value.id))
console.log(filter);

let filter2 = users.filter(value => value.id % 2 === 0);
console.log(filter2);

// Взяти масив з  User[] з попереднього завдання,
// та відсортувати його по id. по зростанню (sort)

let sorted = users.sort((a, b) =>{
    return a.id - b.id;
})
console.log(sorted);

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order ' +
// '(поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(1, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}]),
    new Client(3, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}, {order: "tea"}, {order: "choco" }]),
    new Client(5, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}, {order: "tea"}, {order: "bonbons"}, {order: "choco"}]),
    new Client(6, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}, {order: "tea"}]),
    new Client(4, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}, {order: "tea"}, {order: "orange"}, {order: "note"}, {order: "cugar"}, {order: "cucumber"}]),
    new Client(2, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}, {order: "tea"}, {order: "orange"}, {order: "note"}, {order: "cugar"}, {order: "cucumber"}, {order: "bread"}]),
    new Client(8, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}, {order: "tea"}, {order: "orange"}, {order: "note"}, {order: "cugar"}]),
    new Client(7, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}, {order: "tea"}, {order: "orange"}, {order: "note"}, {order: "cugar"}, {order: "cucumber"}, {order: "bread"}, {order: "milk"}]),
    new Client(9, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}, {order: "tea"}, {order: "orange"}, {order: "note"}, {order: "cugar"}, {order: "cucumber"}, {order: "bread"}, {order: "milk"}, {order: "flowers"}, {order: "cake"}]),
    new Client(10, "max", "asas", "gmail.com", "380962110033", [{order: "juice"}, {order: "tea"}, {order: "orange"}, {order: "note"}, {order: "cugar"}, {order: "cucumber"}, {order: "bread"}, {order: "milk"}, {order: "flowers"}])
]
console.log(clients);

// Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sorted1 = clients.sort((a, b) =>{
    return a.order.length - b.order.length;
})
console.log(sorted1);

// Створити функцію конструктор яка дозволяє створювати об'єкти car, ' +
// 'з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, manufacturer, year, maxSpeed, capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;

    this.drive = () => `їдемо зі швидкістю ${this.maxSpeed} на годину`

    this.info = () => (`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, maximal speed: ${this.maxSpeed}, capacity: ${this.capacity}`)

    this.increaseMaxSpeed = (newSpeed) => {
        this.maxSpeed = newSpeed;
    }

    this.changeYear = (newYear) => {
        this.year = newYear;
    }

    this.Driver = (driver) => {
        this.Driver = (driver)
    }
}

let car1 = new Car("911", "Porsche", 2020, 205, 3745);
console.log(car1);

// drive () - яка виводить в консоль
// `їдемо зі швидкістю ${максимальна швидкість} на годину`
console.log(car1.drive());

// info () - яка виводить
// всю інформацію про автомобіль в форматі `назва поля - значення поля`

console.log(car1.info());
// increaseMaxSpeed (newSpeed) - яка підвищує
// значення максимальної швидкості на значення newSpeed

car1.increaseMaxSpeed(300);
console.log(car1);

//changeYear (newValue) - змінює рік випуску на значення newValue

car1.changeYear(2021);
console.log(car1);

// addDriver (driver) - приймає об'єкт який "водій" ' +
// з довільним набором полів, і додає його в поточний об'єкт car

car1.Driver("Matt Kenseth");
console.log(car1);

// створити класс/функцію конструктор попелюшка з полями
// ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Popeluschka (name, age, foot) {
    this.name = name;
    this.age = age;
    this.foot = foot;
}
let popeluschkas = [
    new Popeluschka("popeluschka1", 15, 35 ),
    new Popeluschka("popeluschka2", 18, 36 ),
    new Popeluschka("popeluschka2", 16, 37 ),
    new Popeluschka("popeluschka2", 17, 35 ),
    new Popeluschka("popeluschka2", 19, 35 ),
    new Popeluschka("popeluschka2", 20, 38 ),
    new Popeluschka("popeluschka2", 21, 35 ),
    new Popeluschka("popeluschka2", 19, 37 ),
    new Popeluschka("popeluschka2", 15, 35 ),
    new Popeluschka("popeluschka2", 23, 37 )

]
console.log(popeluschkas);

class Prinz {
    constructor(name,age,foundFoot) {
        this.name = name;
        this.age = age;
        this.foundFoot = foundFoot;
    }
}
let prinz1 =[ new Prinz("Sam", 18,36)];
console.log(prinz1);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let i = 0; i < prinz1.length; i++) {
    for (let j = 0; j < popeluschkas.length; j++) {
    if (prinz1[i].age === popeluschkas[j].age && prinz1[i].foundFoot === popeluschkas[j].foot) {
        console.log(`the Prinz ${prinz1[i].name} your popeluschka is ${popeluschkas[j].name}`);
      }
    }

}

// Додатково, знайти необхідну попелюшку за допомоги функції
// масиву find та відповідного колбеку

let findpop = prinz1.find(find => find.foundFoot );
console.log(findpop);
