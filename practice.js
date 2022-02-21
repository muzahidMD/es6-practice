// 01. let const 
const name1 = 'Muzahidul Islam';
let age = '22 Years';
const muzahid = {
    phone: 'redmi note 10 pro max',
    class: 'honours 1st year'
};
//2.template string
const story = `My name is ${name1}. I am ${age} old. I have a mobile it's name is ${muzahid.phone}. I read in ${muzahid.class}.`;
// console.log(story);

// 3.arrow fumction
// 1 parameter
const dividing = (num) => num / 5;
// 2 parameter
const add1 = (num1, num2) => (num1 + 2) * (num2 + 2);
// multiline arrow function 
const add2 = (num1, num2) => {
    const sum1 = num1 + 2;
    const sum2 = num2 + 2;
    const multiply = sum1 * sum2;
    return multiply;
}
// 3 parameter
const multiply = (num1, num2, num3) => num1 * num2 * num3;

// const myNumber = multiply(5, 2, 3);
// console.log(myNumber);
// 4.array of number. and then map to get each element multiplied by 5, must use arrow function 
const arr = [8, 5, 2, 7, 9, 3, 1, 6, 4];
const simpleNum = arr.map(x => x * 5);
// console.log(simpleNum);

const numbers = [25, 35, 10, 20, 45, 50];
const numberMap = numbers.map(x => x);
// console.log(numberMap);

// get odd number in array use filter
const filterNumber = numbers.filter(x => x % 2 != 0);
// console.log(filterNumber);


const products = [
    { name: 'pazzle', price: 250, color: 'rainbow' },
    { name: 'mobile phone', price: 25750, color: 'sky blue' },
    { name: 'water botol', price: 5000, color: 'red' },
    { name: 'watch', price: 1050, color: 'orange' },
    { name: 'shoe', price: 1500, color: 'gu' }
]
const productPrice = products.find(productPrice => productPrice.price == 5000);
// console.log(productPrice);

const mobile = { name: 'redmi', price: 25750, color: 'sky blue' };
const name = mobile.name;

// console.log(name);

const sum = (num1, num2, num3 = 0) => num1 + num2 + num3;
const mySum = sum(2, 4);
console.log(mySum);

/* 
Home Work
google search:  javascript function declaration vs arrow function

*/