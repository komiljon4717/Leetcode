/*=========================66=========================*/

// const { timeEnd } = require("console");

// var plusOne = function(digits) {
//     digits = (BigInt(Number(digits.join(''))) + 1n).toString().split('').map(a => +a)
//     console.log(digits);
// };

// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])



// var plusOne = function(digits) {
//     let lastIdx = digits.length - 1
//     for (let i = lastIdx; i >= 0; i--) {
//         if (digits[i] < 9)  {
//             digits[i]++
//             break;
//         } else if (digits[i] === 9) {
//             digits[i] = 0;
//             if (i === 0) {
//                 digits.unshift(1)
//             }
//         }
//     }
//     return digits;
// }
// console.log(plusOne([1, 2, 9]));

/*==========================Error================================*/

// console.time()
// var mergeTwoLists = function(list1, list2) {
//     const array = []
//     while (list1.length && list2.length) {
//         if (list1[0] < list2[0]) {
//             array.push((list1.shift()))
//         }else {
//             array.push(list2.shift())
//         }
//     }
//     return array.concat(list1.slice()).concat(list2.slice())
// };
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// console.timeEnd()

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

/*=====================476 & 1009================================*/

// var bitwiseComplement = function(n) {
//     let newNum = n.toString(2).split('')
//     newNum = parseInt(newNum.map(a => a === '1'? '0': '1').join(''), 2)
//     return newNum
// };

// console.log(bitwiseComplement(1));

/*=====================13================================*/

// var romanToInt = function(s) {
//     let num = 0
//     let roman = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }

//     let len = s.length
//     num = roman[s[len - 1]];
//     for (let i = len - 2; i >= 0; i--) {
//         if (roman[s[i]] < roman[s[i + 1]]) {
//             num -= roman[s[i]];
//         } else {
//             num += roman[s[i]];
//         }
//     }

//     return num;
// };
// console.log(romanToInt("MCMXCIV"));

/*=====================14================================*/

// var longestCommonPrefix = function(strs) {
//     let result = ''
//     for (let i = 0; i <= strs[0].length; i++) {
//         const nextWord = strs[0].slice(0, i)
//         if (strs.every(str => str.slice(0, i) === nextWord)) {
//             result = nextWord
//         }else break;
        
//     }
//     return result
// };

// console.log(longestCommonPrefix(["racecar","car"]));

/*=====================15===Error=============================*/

// var threeSum = function(nums) {
//     nums.sort()
//     let keep = []
//     let result = []
//     if (nums.length < 1) {
//         return result
//     }
//     for (let k = 0; k < nums.length; k++) {
//         keep.push(nums[k])
//         for (let i = 0; i < nums.length; i++) {
//             if (k !== i) {
//                 keep.push(nums[i])
//                 if (keep.length === 3 && keep[0] + keep[1] + keep[2] === 0) {
//                     result.push(keep)
//                     keep = [nums[k]]
//                 }
//                 else if (keep.length > 3) {
//                     keep = [nums[k]]
//                 }
//             }
//         }
//         return result
//     }
// };
// console.log(threeSum([1,-1,-1,0]));

/*=============================2===========error===================================================*/

// var addTwoNumbers = function(l1, l2) {
//    l1 = l1.reverse()
//    l2 = l2.reverse()
//    let res = []
//    if (l1.length >= l2.length) {
//        for (let i = l1.length - 1; i >= 0; i--) {
//            let q = 0
//            let b = 0
//            if (l1[i] + l2[i] >= 10) {
//                q = (l1[i] + l2[i]) % 10
//                b = (l1[i] + l2[i]) / 10 | 0
//                res.push(q + b)
//            }
           
//        }
//    }
// };
// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));


/*======================26================================*/

// var removeDuplicates = function(nums) {
//     for (let i = nums.length; i >= 0; i--) {
//         for (let k = i - 1; k >= 0; k--) {
//             if (nums[i] === nums[k]) {
//                 nums.splice(k, 1)
//             }
//         }
//     }
//     return nums.length
// };

// console.log(removeDuplicates([1,1, 2]));



// var removeDuplicates = function(nums) {
//     let l1 = 0
//     let l2 = 1

//    while (l1 < nums.length) {
//        if (nums[l1] === nums[l2]) {
//             nums.splice(l1, 1)
//        }else{
//            l1++
//            l2++
//        }
//    }
//     return nums.length
// };

// console.log(removeDuplicates([1,1, 2]));



// var removeDuplicates = function(nums) {
//     nums = new Set(nums)
//     nums = new Array(...nums)
//     return nums
// };

// console.log(removeDuplicates([1,1, 2]));

/*===================27========================*/
// var removeElement = function(nums, val) {
//     let p1 = 0
//     while (p1< nums.length) {
//         if (nums[p1] === val) {
//             nums.splice(p1, 1)
//         }else p1 ++
//     }
//     return nums
// };

// console.log(removeElement([3,3,3,2,2,3], 3));

/*========================28=================================*/

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};
console.log(strStr("aaaaaa", "bba"));

























































































































