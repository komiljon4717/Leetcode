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

// console.log(longestCommonPrefix(["dog","racecar","car"]));

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

// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle)
// };
// console.log(strStr("aaaaaa", "bba"));

/*============================================================*/
// var searchInsert = function(nums, target) {
//     let i = 0
//     if (nums.indexOf(target) > 0) {
//         return nums.indexOf(target)
//     }else{
//         while (i < nums.length) {
//             if (nums[i] < target) {6
//                 i++
//                 continue
//             }
//             else{
//                 return i
//             }
//         }
//         return i
//     }
// };

// console.log(searchInsert([1,3,5,6], 2));

/*======================58================================*/

// var lengthOfLastWord = function(s) {
//     s = s.trim().split(' ').reverse()
//     return s[0].length
// };
// console.log(lengthOfLastWord("luffy is still joyboy"));

/*============================204======error==========================*/

// var countPrimes = function(n) {
//     let res = 0
//     for (let i = 2; i < n; i++) {
//         let count = 0
//         for (let k = 1; k <= i; k++) {
//           if (i % k === 0) {
//               ++count
//             }

//         }
//         if (count === 2) {
//             // console.log(i);
//             res++
//         }
        
//     }
//     return res
// };
// console.log(countPrimes(3));
/*==============================20======================================*/

// var isValid = function(s) {
//     let prs = {
//         ')' : '(',
//         ']' : '[',
//         '}' : '{'
//     }
//     let stack = []
//     for (const el of s) {
//         if (prs[el]) {
//             let last_el = stack.pop()
//             if (last_el !== prs[el]) {
//                 return false
//             }
//         }else{
//             stack.push(el)
//         }
//     }
//     return stack.length === 0

// }
// console.log(isValid("()[]{}"));

/*===================131========error==================*/

// var partition = function(s) {
//     let res = []
//     s = s[0].split('')
//     res.push(s)
//     if (s === s.reverse()) {
//         res.push([s.join('')])
//     }
//     for (let i = 0; i < s.length; i++) {
//         let keep = ''
//         for (let k = i + 1; k < s.length; k++) {
//             keep += s[i] + s[k]
//             if (keep === s[k] + s[i]) {
//                 res.push([keep])
//             }else {
//                 res.push([s[k]])
//             }
//         }
//     }
//     console.log(res);
// };

// partition(["aabaa"])

/*============================53===============================*/

// var maxSubArray = function(nums) {
//     let maxSub = nums[0]
//     let curSum = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (curSum < 0) {
//             curSum = 0
//         }
//         curSum += nums[i]
//         maxSub = Math.max(maxSub, curSum)
//     }
//     return maxSub
    
// };
// console.log(maxSubArray([1]));

/*=========================70====================================*/

// var climbStairs = function(n) {
//     if (n === 1 ) return 1
//     let num1 = 1
//     let num2 = 2

//     for (let i = 3; i <= n; i++) {
//         let num3 = num1 + num2
//         num1 = num2
//         num2 = num3
//     }
//     return num2
// };

// console.log(climbStairs(3));

/*=========================118===================================*/        

// var generate = function(numRows) {
//     let res = [[1], ]
//     if (numRows === 1) {
//         return res
//     }
    
//     for (let i = 0; i < numRows - 1; i++) {
//         let d = []
//         d.push(1)
//         for (let j = 0; j < res[i].length; j++) {
//             if (j !== res[i].length-1) {
//                 d.push(res[i][j] + res[i][j + 1])
//             }
//         }
//         d.push(1)
//         res.push(d)
//     }
//     return res
// };

// console.log(generate(5));

/*==============================119================================*/

// var generate = function(numRows) {
//     let res = [[1], ]
    
//     for (let i = 0; i < numRows; i++) {
//         let d = []
//         d.push(1)
//         for (let j = 0; j < res[i].length; j++) {
//             if (j !== res[i].length-1) {
//                 d.push(res[i][j] + res[i][j + 1])
//             }
//         }
//         d.push(1)
//         res.push(d)
//     }
//     return res[numRows]
// };

// console.log(generate(1));


/*=================================125=================================*/

// var isPalindrome = function(s) {
//     s = s.toLowerCase()
//     let a = /^[a-z0-9]+$/i
//     let newWord = ''
//     for (let i = 0; i < s.length; i++) {
//         if (a.test(s[i])) {
//             newWord += s[i]
//         }
//     }
//      return newWord === newWord.split('').reverse().join('');
// };

// console.log(isPalindrome("rece a car"));

/*=================================136=========================================*/

// var singleNumber = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let count = 0
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] === nums[j] && i !==j) {
//                 count++
//             }
            
//         }
//         if (count === 0) {
//             return nums[i]
//         }
//     }
// };

// console.log(singleNumber([2, 2, 1]));


/*=============================412==============================*/
// var fizzBuzz = function(n) {
//     let res = []
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 ===0 && i % 5 === 0) {
//             res.push('FizzBuzz')
//             continue
//         }
//         if (i % 3 === 0) {
//             res.push('Fizz')
//             continue
//         }
//         if (i % 5 === 0) {
//             res.push('Buzz')
//             continue
//         }
//         else res.push(`${i}`)
        
//     }
//     return res
// };

// console.log(fizzBuzz(15));

/*============================414============================*/

// var thirdMax = function(nums) {
//     nums = Array.from(new Set(nums))
//     if (nums.length < 3) {
//         return Math.max(...nums)
//     }

//     for (let i = 0; i < 2; i++) {
//         let max = Math.max(...nums)
//         nums.splice(nums.indexOf(max), 1)
//     }
//     return Math.max(...nums)
// };

// console.log(thirdMax([1,1, 1]));

/*==============================415=================================*/

// var addStrings = function(num1, num2) {
//     return BigInt(num1) + BigInt(num2) + ''
// };
// console.log(addStrings("9333852702227987",
// "85731737104263")
// );

/*==========================434=========================================*/

// var countSegments = function(s) {
//     let res = []
//     if (s === '') {
//         return 0
//     }
//     s = s.split(' ')
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ' || s[i] === '') {
//             continue   
//         }
//         else{
//             res.push(s[i])
//         }
        
//     }
//     return res.length
// };

// console.log(countSegments("Hello, my name is John"));

/*=============================441=================================*/

// var arrangeCoins = function(n) {
//     let j = 1
//     let a = 0
//     while (a < n) {
//         j++
//         a+= j
        
//     }
//     return j -1 
// };

// console.log(arrangeCoins(5));

/*=========================6 Medium======================================*/

// var convert = function(s, numRows) {
//     let res = []
//     let step = 1
//     let index = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (res[index] === undefined) {
//             res[index] = ''
//         }
//         res[index] += s[i]  
//         if (index === 0) {
//             step = 1
//         }
//         else if (index === numRows - 1) {
//             step = -1
//         }
//         index += step;
//     }
//     return res.join('')
// };


// console.log(convert("PAYPALISHIRING", 3));

/*=========================1909==============================*/

// var canBeIncreasing = function(nums) {
//     let count = 0
//     for (let i = 0; i < nums.length - 1; i++) {
//         if(nums[i] >= nums[i + 1]){
//             count++
//             if(i > 0 && nums[i - 1] >= nums[i + 1]){
//                 nums[i + 1] = nums[i];
//             }
//         }
//         if(count > 1){
//             return false
//         }
//     }
//     return true
// }
// console.log(canBeIncreasing([105, 428, 32, 468]));


/*=======================507=====================*/
// var checkPerfectNumber = function(num) {
//     let res = 0
//     for (let i = 1; i <= num / 2 | 0; i++) {
//         if (num % i === 0) {
//             res += i
//         }
        
//     }
//     return res === num? true: false;
// };

// console.log(checkPerfectNumber(7));

/*========================506=======================================*/

// var findRelativeRanks = function(score) {
//     let test = [...score]
    
//     for (let i = 0; i < score.length; i++) {

//         let max = Math.max(...test)
//         let index = test.indexOf(max)
//         test.splice(index, 1)
//         if (i === 0) {
//             score[score.indexOf(max)] = "Gold Medal" 
//         }
//         else if (i === 1) {
//             score[score.indexOf(max)] = "Silver Medal"
//         }
//         else if (i === 2) {
//             score[score.indexOf(max)] = "Bronze Medal"
//         }
//         else{
//             score[score.indexOf(max)] = i + 1 + ''
//         }
        
//     }
//     return score
// };

// console.log(findRelativeRanks([10,3,8,9,4]));


/*=================================504====================================*/

// var convertToBase7 = function(num) {
//     return num.toString(7)
// };

// console.log(convertToBase7(-7));


/*=================================500======error==============================*/

// var findWords = function(words) {
//     let zax = [...words]
//     let res = []
//     let firstRow = "qwertyuiop".split('')
//     let secondRow = "asdfghjkl".split('')
//     let thirdRow = "zxcvbnm".split('')
    

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].toLowerCase()
//         let word = words[i].split('')
//         let keep = ''
//         for (let k = 0; k < word.length; k++) {
//             if (firstRow.includes(word[k]) && firstRow.includes(word[k + 1])) {
//                 k === 0? keep += word[k].toUpperCase():keep += word[k]
//             }
//             else if (secondRow.includes(word[k])) {
//                 k === 0? keep += word[k].toUpperCase():keep += word[k]
//             }
//             else if (thirdRow.includes(word[k])) {
//                 k === 0? keep += word[k].toUpperCase():keep += word[k]
//             }
//             else break
            
//         }
//         if (zax.includes(keep)) {
//             res.push(keep)
//         }
        
//     }

//     return res
// };

// console.log(findWords(["Hello","Alaska","Dad","Peace"]));

/*=================================485====================================*/

var findMaxConsecutiveOnes = function(nums) {
    let res = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ++count
            if (res < count) {
                res = count
            }
        }else count = 0
    }
    return res
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));












