let nums = [
     2, 3, 23, 44, 11
]
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);
    
}
let str = [
    "html", "css", "js", "mysql", "mongodb"
]
for (let i = 0; i < str.length; i++) {
    const strElement = str[i];
    console.log(strElement);
}

let x =[
    {
        num:[2, 122, 43, 12, 54],
        str: ["asd", "qwe", "trd", "ios", "44"],
        bool: [true, false, true, false, false]
    }
]
for (let i = 0; i < x.length; i++) {
    const x1 = x[i];
    console.log(x1)

}

let str1 = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < str1.length) {
    let str = str1[i];
    console.log(str);
    i++
}
for (let j = 0; j < str1.length; j++) {
    const str = str1[j];
    console.log(str);

}

// Створити масив з 10 числових елементів.
// Вивести в консоль всі його елементи в циклі.

let num1 = [12,22,11,43,54,756,887,98,99,100];
for (const number of num1) {
    console.log(number);
}

// Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

let arr = [13,true,false,"valera", 22,43,true,"xxx","asas"];
for (let j = 0; j < arr.length; j++) {
    const item = arr[j];
    if (item === typeof "") {
        console.log(item);
    }

}