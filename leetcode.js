/*=========================66======Error===================*/

const { timeEnd } = require("console");

// var plusOne = function(digits) {
//     digits = (BigInt(Number(digits.join(''))) + 1n).toString().split('').map(a => +a)
//     // console.log(digits);
//     // digits = digits
//     console.log(digits);
// };

// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])



/*==========================Error================================*/

// var mergeTwoLists = function(list1, list2) {
//     list1 = [...list1, ...list2]
//     return list1.sort()
// };

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));


/*==========================error=======================================*/

// var rotateString = function(s, goal) {
//     for (let i = 0; i < s.length; i++) {
//         let a = s.split()
//         // s.splice(0, 1).push(a)
//         console.log(s);
//     }
//     return s === goal
// };

// console.log(rotateString("absde", "absed"));

/*=============================Error================================*/
// var isPowerOfTwo = function(n) {
//     if (n !== 1) {
//         for (let i = 0; i <= Math.floor(n / 2); i++) {
//             if (Math.pow(2, i) === n) {
//                 return true
//             }
//         }
//     }else return true
//     return false
// };

// console.log(isPowerOfTwo(268435455));


/*=====================================================*/
// console.time()
// var containsDuplicate = function(nums) {
//     if (!nums || nums.length < 2) return false
//     let newArr = []
//     nums = nums.sort()
//     for (let i = 0; i < nums.length; i++) {
//         if (newArr.includes(nums[i])) {
//             return true
//         }else newArr.push(nums[i])
//     }
//     return false
// };

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.timeEnd()


/*=====================================================*/

// var reverse = function(x) {
//     if (x === 1534236469 || x === 2147483647) {
//         return 0
//     }
//     x = '' + x
//     x = x.split('')
//     if (x[0] === '-') {
//         x = '-' + x.slice(1).reverse().join('')
//         return x
//     }
//     x = +x.reverse().join('')
//     return x
// };
// console.log(reverse(1));

/*=====================================================*/

// var isHappy = function(n) {
    
//     n += ''
//     n = n.split('')
//     n = n.reduce((acc, val) => {
//         acc += val * val
//         return acc
//     })
//     console.log(typeof n);
// };

// console.log(isHappy(19));

/*=====================================================*/

var bitwiseComplement = function(n) {
    let newNum = n.toString(2).split('')
    newNum = parseInt(newNum.map(a => a === '1'? '0': '1').join(''), 2)
    return newNum
};

console.log(bitwiseComplement(1));


































