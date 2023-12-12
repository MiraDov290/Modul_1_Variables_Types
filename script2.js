// const str = 'abc';
// for (let i = 0; i < str.length; i += 1){
//     if (str[i] === 'b') {
//         continue
//     }
//     console.log(str[i]);//a c
// }



// const str = 'abc';
// for (let i = 0; i < str.length; i += 1){
//     if (str[i] === 'b') {
//         break
//     }
//     console.log(str[i]);//a
// }


// if (4 === 4) {
//     console.log('true');//true, якщо відповідає умові, елемент успішний
// }



// if (2 % 2 === 0) {
//     console.log('парне');//парне
// } else {
//     console.log("не парне");
// }



// if (3 % 2 === 0) {//або (!(4%2))
//     console.log('парне');
// } else {
//     console.log("не парне");//не парне
// }



// if (4 < 3) {
//     console.log('YES');
// } else if (4 < 6) {
//     console.log('YES 1');//YES 1
// } else if(4<7){
//     console.log('YES 2');
// }else if(4<8){
// console.log('YES 3');
// } else {
//     console.log('NO');
// }





// const result = 4 % 2 === 0 ? 'Парне' : 'Не парне';
// console.log(result);//Парне





// const points = 100;
// let partner;
// switch (points) {
//     case 50:
//         partner = 'Base';
//         break;
//     case 75:
//         partner = 'Bronze';
//         break;
//     case 100:
//         partner = 'Gold';
//         break;
//     default:
//         console.log('Another value');
// }
// console.log(partner);//100



//----------------------------------------Області видимості-------------------------------------------------
//Глобальна
// const num = 10




//Блочна => const let {}
// if (true) {
//     const str = 'Hello'
//     console.log(str);
//     console.log(num);
// }



//Функціональна => var
// function foo() {
    
// }//не використовується, тому що була тільки з var





// let a = 10;
// if (true) {
//     let a = 5;
// }
// console.log(a);//10


// let a = 10;
// if (true) {
//     a = 5;
// }
// console.log(a);//5



// let a = 10;
// if (true) {
//     let a = 15;
//     if (true) {
//         a = 5;
//     }
// }
// console.log(a);//10



let a = 10;
if (true) {
     a = 15;
    if (true) {
        a = 5;
    }
}
console.log(a);//5
//---------------------------------------------------------------------------------------------------------




