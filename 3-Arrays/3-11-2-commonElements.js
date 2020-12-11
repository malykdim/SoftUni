/* function commonElements(str1, str2) {
    for (let k = 0; k < str1.length; k++) {
        for (let item of str2) {
            if (str1[k] === item) {
                console.log(item);
            }
        }
    }
}
// commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']); // hello 4
// commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']); // o i
commonElements(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]); // 
commonElements(["Hey", "hello", 2, 4, "Peter", "e"], ["Petar", 10, "hey", 4, "hello", "2"]); // 
// 100/100 // mySolution
 */

/* Deni */
/* 1 */
// function commonElements(firstArr, secondArr) {
//     for(let el of firstArr) {
//         let isCommon = secondArr.includes(el);
//         if (isCommon) {
//             console.log(el);
//         }
//     }
// }
/* 2 */
// function commonElements(firstArr, secondArr) {
//     for(let el of firstArr) {
//         for(let e of secondArr) {
//             if (el === e) {
//                 console.log(el);
//                 break;
//             }
//         }
//     }
// }
commonElements(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]); // 
commonElements(["Hey", "hello", 2, 4, "Peter", "e"], ["Petar", 10, "hey", 4, "hello", "2"]); // 
// 100/100 // for both
