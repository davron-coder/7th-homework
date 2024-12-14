let arr = [
    [115,50,25],
    [75,12,99],
    [34,36,55],
];

let result = arr.map(Arr => Arr.reduce((num1, num2) => num1 + num2)); 
console.log(result);

// нужно сложить числа внутри вложенных массивов
// ответ должен выглядить так - [190,186,125]

let prices = [15000,3200,10200,455000,123000,7000];
let min = Math.min(...prices)
let max = Math.max(...prices)

console.log(
    "min " + min
);

console.log(
    "max " + min
);

// нужно найти макс и мин price 
// reduce применять нельза!

let nums = [12,3,57,34,90,1,10,9];
let { odd, even } = nums.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.even.push(num);
    } else {
      acc.odd.push(num);
    }
    return acc;

}, {odd: [] , even:[]});
console.log(even);
console.log(odd);

// в odd сохранить нечетные числа 
// в even сохранить четные числа 
// filter использовать нельзя