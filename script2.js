// const str = 'abc';
// for (let i = 0; i < str.length; i += 1){
//     if (str[i] === 'b') {
//         continue
//     }
//     console.log(str[i]);//a c
// }



const str = 'abc';
for (let i = 0; i < str.length; i += 1){
    if (str[i] === 'b') {
        break
    }
    console.log(str[i]);//a
}