// Ресурси:
// mdn: https://developer.mozilla.org/en-US/
// learn.js: https://uk.javascript.info/


// const getTotalPrice = 100; // камелкейс - загальноприйнятий стандарт написання змінних
// const get_total_price = 100; // снейкейс
// const MAX_COUNT = 100; // якщо великими літерами, говорить, що не можна змінювати

// Значення, яке знаходиться в константі дає знати, що його не можна перевизначити, а let може бути і не визначений



// let totalPrice; //undefined
// console.log(totalPrice);
// totalPrice = 10; // 10


// console.log(totalPrice); //якщо перед, то буде undefined
// var totalPrice; // схожа до змінної let та має поведінку сплиття нагору(хостінга), що призводила до помилок.Він мав бути один на файл.
// totalPrice = 12;
// console.log(totalPrice); //11

//До 2015 року існував var, a коли з'явилася мова ESMA_Script6 виникли const та let



//Примітивні типи даних:
//1 Number
//2 String
//3 Boolean // true // false
//4 null
//5 undefined


//Значення, які приводяться до false
// '' - порожній рядок
// 0 - число
// false
// null - відсутність числа пустота
// undefined
// NaN

// console.log(Boolean(null)); //false
// console.log(Boolean(1)); //true



//Number
// console.log(typeof (0));//number
// console.log(typeof '0');//string
// console.log(typeof NaN);//number

// const result = 10 + "10";
// console.log(typeof result);//string

// const result = 10 + Number("10");
// console.log(result)//20
// console.log(typeof result);//number

// const result = 10 + Number("10px");
// console.log(isNaN(Nan));//true
// console.log(10 === 10);//true
// console.log(NaN === NaN);//false
// console.log(result)//NaN
// console.log(typeof result);//number

// console.log(Number("10px"));//NaN
// console.log(isNaN("10px"));// true // 1.конвертує до числа 2.перевіряє на NaN
// console.log(Number.isNaN("10px"));// false //1.перевірка на NaN



// const product1 = 100;
// const product2 = undefined;

// console.log(product1 * 2);//200
// console.log(product2 * 3);//NaN
// console.log(product1 * 1 + product2 * 3);//NaN



// const price = 100;
// const qty = 4;
// const total = price * qty;
// const total = price ** qty;// ** приводить до степеня
// console.log(total);//400

// let total = 90;
// total = total + price;//or total += price;
// console.log(total);//190

// total -= 10;
// total **= 2;
// console.log(total);//6400



//String - ітерабельний тип даних, його можна перебрати, та індекс починається з 0
// const str = 'va'lue';
// console.log(str);//помилка

// const str = "va'lue";
// console.log(str);//va'lue

// const str = `va'lue`;
// console.log(str);//va'lue

// const price = 100;
// const str = `va'lue ${price}`;
// console.log(str);//va'lue 100
//const str = `va'lue ${price * 12}`;//va'lue 1200


// const str = 'test value';
// console.log(str[1]);// e
// console.log(str.includes('x'));// false
// console.log(str.indexOf('s'));// 2
// console.log(str.indexOf('t', 4));// -1
// console.log(str.indexOf('t',1));// 3



// const value = "Hello"
// const result = value + 'world';
// console.log(result);//Helloworld

// const value = "Hello"
// const result = value + ' world';// or const value = "Hello " or const result = value + " " + 'world';
// const result2 = `${value} world`;
// console.log(result);//Hello world
// console.log(result2);//Hello world

// const value = 10;
// const result = value + '15';//1015
// const result = value + 10 + '15';//2015
// const result2 = "1" + value + 10 + '15';
// console.log(result2);//1101015

// const result = '15' - 10;// математика при відніманні, а при додаванні - канкадинація
// console.log(result);//5

// const result = 'a' - 'b';
// console.log(result);//NaN



// const arr = [1, 2, 3];
// arr.splice(0, 1);
// console.log(arr);//[2, 3] - мутабельний тип даних

// let str = 'Hello world';
// console.log(str.slice(1, 5));//ello
// console.log(str);//Hello world - імутабельний тип даних











