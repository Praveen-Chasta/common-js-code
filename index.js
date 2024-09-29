// 1. Write a JavaScript function to check whether an `input` is an array or not.

// Ans.   const arr = [1,2,3,4,5]
// const string = "Happy"


// function checkArray(input){

//     if(toString.call(input) == `[object Array]`){
//         return true 
//     }
//     else{
//         return false
//     }

//     return false

// }

// console.log(checkArray(string))



// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array

// const array1 = [1,2,3,4,5,6,7,8]
// const array2 = [1,2,8,5,7,6,7,8]


// function getArrayValue(arr, n){
     
//     if(n == null){
//         return arr[0]
//     }else if (arr == null){
//         return 0
//     } else if(n < 0){
//         return []
//     }
//     else{
//         return arr.slice(0,n)
//     }

// }

// console.log(getArrayValue([], 5))



// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

// const array1 = [1,2,3,4,5,6,7,8]
// const array2 = [1,2,8,5,7,6,7,8]

// function a1(arr, n){
//     let a = arr.length

//     if(arr == null){
//         return null
//     }

//     else if(n == null){
//         return arr[a-1]
//     }

//     else{
//         return arr.slice(a-n, a)
//     }

// }

// console.log(a1(array1, 2))

// 5. Write a simple JavaScript program to join all elements of the following array into a string

// const myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.toString())
// console.log(myColor.join("+"))

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// function number(num){
   
//     let string = num.toString()
//     console.log(string)
//     let result = [string[0]]

//     for (let i = 1; i <= string.length; i++){

//         if(string[i - 1] % 2 === 0 && string[i] % 2 === 0){         This works because of javascript Implicit Type Coercion 
//              result.push('-', string[i])
//         }
//         else{
//              result.push(string[i])
//         }
//     }

//     return result.join('')

// }

// console.log(number(22445698))

// 7. Write a JavaScript program to sort the items of an array.

// let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// for (let i = 0; i <= arr1.length; i++){
//     for (let j = 0; j <= arr1.length - i - 1; j++){
//         if(arr1[j] > arr1[j+1]){
//             temp = arr1[j]
//             arr1[j] = arr1[j+1]
//             arr1[j+1] = temp
//         }
//     }
// }

// console.log(arr1)


// 8. Write a JavaScript program to find the most frequent item in an array.

// let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

// let mostFrequent = 1
// let item
// let count = 0

// for (let i = 0; i < arr1.length; i++){
//     for(let j = i; j < arr1.length; j++){
//         if(arr1[i] === arr1[j]){
//             count++
//         }
//     }
//     if(mostFrequent < count){
//         mostFrequent = count 
//         item = arr1[i]
//     }

//     count = 0
// }

// console.log(item + mostFrequent)

// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// let string = 'The Quick Brown Fox';

// let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lower = "abcdefghijklmnopqrstuvwxyz";
// let string2 = ""

// for(let i = 0; i < string.length; i++){
//     if(upper.includes(string[i])){
//         string2 += string[i].toLowerCase()
//     }
//     else if (lower.includes(string[i])){
//         string2 += string[i].toUpperCase()
//     }
//     else{
//         string2 += string[i]
//     }
// }

// console.log(string2)

// 10. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.

// let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];


// for (let i = 0; i < a.length; i++){
//     console.log("row " + i)
//     for(let j = 0; j < a[i].length; j++){
//         console.log(a[i][j])
//     }
// }

// 11. Write a JavaScript program to find the sum of squares of a numerical vector

// let vector1 = [1, 2, 3, 4, 5,]

// let squares = vector1.map(e => e * e).reduce((prev, curr) => prev + curr , 0 )

// console.log(squares)


// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// let a = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

// let b = [...new Set(a)]

// console.log(b)


// let c = a.reduce((prev, curr) => {
//     if(!prev.includes(curr)){
//         prev.push(curr)
//     }
//     return prev
// },[])

// console.log(c)

// let d = []

// a.forEach(element => {
//     if(!d.includes(element)){
//         d.push(element)
//     }
// });

// console.log(d)


// let e = a.filter((val, index) => a.indexOf(val) === index)

// console.log(e)

// let c = []

// for (let i = 0; i < a.length; i++) {
//     if (!c.includes(a[i])) {
//         c.push(a[i]);
//     }
// }

// console.log(c)


// let array = [1,1,2,2,3,3,4,4,5,5,9,9,8,8,7,7,6,6,6,8,7,4,5,1,2,3,9,6]

// function removeDuplicateAndSort(arr, n){

//     // let arr2 = []
    
//     // Remove Duplicate
//     // for(let i = 0; i < arr.length; i++){
//     //     if(!arr2.includes(arr[i])){
//     //         arr2.push(arr[i])
//     //     }
//     // }

//     // let arr2 = arr.filter((value, index) => arr.indexOf(value) !== index)

//     let arr2 = []

//     arr.forEach((value) => {
//         if (!arr2.includes(value)){
//             arr2.push(value)
//         }
//     })

//     // Sorted

//     for (let i = 0; i < arr2.length; i++){
//         for (let j = 0; j < arr2.length - 1 - i; j++){
//             if (arr2[j] > arr2[j + 1]){
//                 temp = arr2[j]
//                 arr2[j] = arr2[j + 1]
//                 arr2[j + 1] = temp 
//             }
//         }
//     }
    
//     console.log(arr2)
//     // Binary Search

//     let left = 0;
//     let right = arr2.length - 1
    
//     while (left <= right){
        
//         let mid = Math.floor((left + right) / 2)

//         if(arr2[mid] === n){
//             return mid
//         }

//         else if (arr2[mid] < n){
//              left = mid + 1
//         }

//         else{
//              right = mid - 1
//         }

//     }

//     return -1
    
// }

// let value = removeDuplicateAndSort(array, 9)


// console.log("Index of the target value:", value);


// let object = {}

// for (let k = 0; k < array.length; k++){

//     let val = array[k]

//     if(object[val]){
//         object[val] ++ 
//     }
//     else{
//         object[val] = 1
//     }
// }

// console.log(object)

// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];
// let array3 = []

// let maxlength = Math.max(array1.length, array2.length)

// for (let i = 0; i < maxlength; i++){
//     let value = array1[i] || 0
//     let value2 = array2[i] || 0 

//     array3.push(value + value2)
// }

// console.log(array3)

// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

// let array = [1, 2, 3, 4, 2, 5, 3, 6, 1];
// let arr = []
// let object = {}

// for (let i = 0; i < array.length ; i++){
//     let value = array[i]

//     if(object[value]){
//         object[value] ++ 
//     }

//     if(object[value] > 1){
//         arr.push(array[i])
//     }

//     else{
//         object[value] = 1
//     }
// }

// console.log(object)
// console.log(arr)

// let val = array.filter((item, index) => array.indexOf(item)  === index)

// console.log(val)


// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// let numbers= [10,20,10,40,50,60,70]
// let target = 50

// let arr = []

// for (let i = 0; i < numbers.length; i++){
//     for (let j = i + 1; j < numbers.length; j++){
//         if(numbers[i] + numbers[j] === target){
//              arr.push([i,j])
//         }
//     }
// }

// console.log(arr)

// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.

// let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]

// let arr2 = []

// for(let i = 0; i < arr.length; i++){
//     if(Number(arr[i])){
//         arr2.push(arr[i])
//     }
// }

// console.log(arr2)

// 28. Write a JavaScript function to find the longest common starting substring in a set of strings.

// function longestCommonPrefix(arr){
//     if(arr.length === 0) return 0;
//     if(arr.length ===1) return arr[0]

//     let substring = ""

//     for(let i = 0; i < arr[0].length; i++){
//         let char = arr[0][i]

//         for(let j = 1; j < arr.length; j++){

//             if(arr[j][i] !== char){
//                 return substring
//             }
//         }
//         substring += char 
//     }
//     return substring
// }



// console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); 
// console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); 
// console.log(longestCommonPrefix(['apple', 'app', 'apricot']));


// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];

// function removeDuplicateAndSort(arr1, arr2){
//     let arr = arr1.concat(arr2)
    
//     let filteredArray = arr.filter((item, index) => arr.indexOf(item) === index)

//     return filteredArray
    
// }

// console.log(removeDuplicateAndSort(array1, array2))

// let arr = [1,2,8,7,9,6,3,4,5]

// function sorted(arr){
    
//     return arr.sort((a, b) => a - b);
    
// }

// console.log(sorted(arr))

// for (let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length - 1 - i; j++){
//         if(arr[j] > arr[j + 1]){
//             temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }

// console.log(arr)


//  31. Write a JavaScript function to remove a specific element from an array.

// let array = [1,2,3,4,5]

// function removeElement(arr, num){
     
//      let a = arr.filter((item) => item !== num)
//      return a
// }

// console.log(removeElement(array, 5))

// 32. Write a JavaScript function to find an array containing a specific element

// let array = [1,2,3,4,5]

// function findElement(arr, num){
     
     
//      return arr.includes(num)
// }

// console.log(findElement(array, 5))

// 34. Write a JavaScript function to get the nth largest element from an unsorted array.

// let array = [ 43, 56, 23, 89, 88, 90, 99, 652]
// let n = 4

// function nThLargestNumber(arr, n){
//    let max = arr[0]
//    let a = []

   
//    for(let i = 0; i < n; i++){
//         max = Math.max(...arr)
//         let index = arr.indexOf(max)
//         arr.splice(index, 1)
//    }

//    return max
// }

// console.log(nThLargestNumber(array, n))


// 35. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array

// function numbers(a, b){
    
//     let ab = []

//     for(let i = 0; i <= a; i++){
//         ab.push(b)
//     }
//     return ab
// }

// console.log(numbers(4, 11))

// 38. Write a JavaScript function to move an array element from one position to another.

// function move(arr, fromIndex, toIndex) {
//     if (fromIndex >= arr.length || toIndex >= arr.length || fromIndex < 0 || toIndex < 0) {
//         return "Invalid index";
//     }
  
//     let index = arr[fromIndex]
    
//     arr.splice(fromIndex, 1)
//     arr.splice(toIndex, 0, index)
   
//     return arr
// }


// console.log(move([10, 20, 30, 40, 50], 0, 2)); 

// 40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

// function loopValue(a, b){

//    let arr = [] 
//    let count = 0

//    for(let i = a; i <= b; i++){
//         arr.push(i)
//         count ++
//         if(count === b ){
//             break
//         }
//    }
//   return arr
// }

// console.log(loopValue(-6, 4))


// 41. Write a JavaScript function to generate an array between two integers of 1 step length.

// function loopValue(a, b){

//    let arr = [] 
//    let count = 0

//    for(let i = a; i <= b; i++){
//         arr.push(i)
//    }
//   return arr
// }

// console.log(loopValue(4, 7))

// 45. Write a JavaScript program to find all the unique values in a set of numbers.

// function removeDuplicate(arr){
   
//     let a = []

//     for(let i = 0; i < arr.length; i++){
//         if(!a.includes(arr[i])){
//             a.push(arr[i])
//         }
//     }
//    return a
// }

// console.log(removeDuplicate([1, -2, -2, 3, 4, -5, -6, -5]))


// // 48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

// let array1 = [2, 3, 5, 7]
// let array2 = [4, 6, 8, 9]

// function primeNumbers(a){
   
//     for( n of a){
//         if(n === 1 || (n > 2 && n % 2 === 0)){
//             return false
//         }
//     }
//     return true
// }

// console.log(primeNumbers(array1))

// console.log(primeNumbers(array2))


// 49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,6,17,108,19]
let n = 2;

function nThLargestNumber(arr, n){

    let max = arr[0]

    for(let i = 0 ; i < n; i++){
        max = Math.max(...arr)
        let index = arr.indexOf(max)
        arr.splice(index, 1)
    }

    return max

}

console.log(nThLargestNumber(array, n))