// Задача 1

// У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для удвоения каждого значения 
// в массиве (массив нужно передать аргументом) и вывода результата в консоль. 
// Вызовите функцию для демонстрации результата

let arrayOne = [2,4,6,8,10];

function multipleTwo (arrayOne){
for(let number of arrayOne){
    number = number*2;
    console.log(number);
}
}
multipleTwo(arrayOne);



// Задача 2

// Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. 
// Для отображения результа работы функции, вызовите её три раза с различными параметрами, результат 
// каждого вызова присвойте отдельной переменной и выведите переменные в консоль.


function testOne(stringOne, num){
   return stringOne.slice(0,num);
}

let messageOne = testOne("Какое редкое явление можно наблюдать...", 5);
console.log(messageOne);

let messageTwo = testOne("небо бывает разных цветов", 4);
console.log(messageTwo);

let messageThree = testOne("голубое!, розовое, зеленое и много других ярких цветов", 8);
console.log(messageThree);


// Задача 3*

// У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления среднего значения 
// элементов массива (массив нужно передать аргументом) и вывода результата в консоль. 
// Вызовите функцию для демонстрации результата.

let sum = 0;
let result = 0;
let arrayTwo = [10, 15, 20, 25, 30];

function averageResult (arrayTwo){
    for(let number of arrayTwo){
    sum = sum + number;
    }
    result = (sum/arrayTwo.length);
    let message = `Среднее значение = ${result}`;
    console.log(message);
}
averageResult(arrayTwo);



// Вариант Chat GPT:
// let arrayTwo = [10, 15, 20, 25, 30];
// function averageResult(arrayTwo) {
//     let sum = arrayTwo.reduce((acc, number) => acc + number, 0);
//     let result = sum / arrayTwo.length;
//     console.log(`Среднее значение = ${result}`);
// }
// averageResult(arrayTwo);



