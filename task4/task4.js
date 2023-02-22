// створити функцію яка приймає три числа та виводить найменьше.

let minNum = [124,231,754,42,21,534];
let maxNum = [124,231,754,42,21,534];
for (let i = 0; i < minNum.length; i++) {
    if (minNum[i] < minNum[0]){
        minNum[0] = minNum[i];
    }
    else if (maxNum[i] > maxNum[0]){
            maxNum[0] = maxNum[i];
        }
}
console.log(minNum[0]);
console.log(maxNum[0]);

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let average = (nums) => {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num += nums[i];
    }
    return num
}
console.log(average(minNum));

// створити функцію яка заповнює масив рандомними числами

// Функція приймає масив та робить
// з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let nums = [1,2,3];
let reversed = nums.reverse();
console.log(reversed)

//створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.

let fun = [1,2,3,4];
let fun1 = [2,3,4,5];
console.log(fun.concat(fun1))