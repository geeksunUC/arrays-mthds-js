////// challange :: 
////////////////////////////////////////////////// problem solving /////////////////////////////////// 



// Easy Problems::////////////////////////////////////////////
// Append an Element:
const arr = [1,2,3,4,5]
// Given an array of numbers, add a new number to the end of the array .
////////////////////
/// answer ::
arr.push(6);
console.log(arr);

// Remove the Last Element:
// Remove the last element from an array .
arr.splice(5,1);
console.log(arr);

//////////////

// Insert at the Beginning:
// Add an element at the start of an array .
////////////////////
// const arr = [1,2,3,4,5]

////// put your answer here ...........

arr.unshift(0);
console.log(arr);

// Remove the First Element:
// Remove the first element from an array .
/////////////////
// 
////// put your answer here ...........
let removedElement = arr.shift();
console.log(removedElement); 
console.log(arr);

// Check if Element Exists:
// Write a function that checks if a given element exists .
// const arr = [1,2,3,4,5]

  //// boolean ==> true or false

findElement = function(x){
    if(arr.includes(x)){
        return true;
    }else{
        return false;
    }
}
////// put your answer here ...........
console.log(findElement(3));
console.log(findElement("3")); 
console.log(findElement(7)); 

// Combine two arrays into one .

///////////////////

// const arr = [1,2,3,4,5]
 const arr2 = [6,7,8,9,10]

////// put your answer here ...........
const combinedArray = arr.concat(arr2);
console.log(combinedArray);

// Reverse an Array:
// Reverse the elements in an array .
// const arr2 = [6,7,8,9,10]

////// put your answer here ...........

const reversedArray = arr2.reverse();
console.log(reversedArray);

//////////////////

// Slice a Subarray:
// Extract a subarray from a given array. Return elements between index 2 and 5.
 const arr3 = [6,7,8,9,10,20,30,50,60]

////// put your answer here ..........
const subArray = arr3.slice(2,6);
console.log(subArray);

// Splice :
//  remove 3 elements from an array starting from index 2.
// const arr2 = [6,7,8,9,10,20,30,50,60]

////// put your answer here ...........
arr3.splice(2,3);
console.log(arr3);  

// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.

////// put your answer here ...........
///////////////////////
const arrOfNumbers= [1,2,3,4,5,6,7] ; 

const sumNumOfArray = function (arr){
    let sum = 0;
    arr.forEach( num => {
        sum += num;
    }); 
    return sum;
}
console.log(sumNumOfArray(arrOfNumbers)); 

// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
////// put your answer here ...........
arr3.splice(0,1);
console.log(arr3);

///////////////////////

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
////// put your answer here ...........
///////////////////////
arr3.splice(1,2,100,200);
console.log(arr3);

// Extract Last 3 Elements:
// Use slice to get the last 3 elements from an array.
////// put your answer here ...........
const lastThreeElements = arr3.slice(-3);
console.log(lastThreeElements);

////////////////////

// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////// put your answer here ...........
////////////////////
const arr01 = [5,3,2,1,4] 
const arr02 = [9,8,6,10,7]
// const concatenatedSortedArray = arr01.concat(arr02).sort();
const concatenatedSortedArray = arr01.concat(arr02).sort((a,b) => a-b);
console.log(concatenatedSortedArray);

// Find Maximum Number:
// Use forEach to find the largest number in an array.
////// put your answer here ...........
const numbersArray = [5,3,2,1,4,10,8,6,7,9];    
let max = numbersArray[0];
numbersArray.forEach( num => {  
    if(num > max) {
        max = num;
    }
});
console.log(max);

////////////////

// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.


////// put your answer here ...........

const numbers = [1,10,2,10,5,6,10,100,6];
const countOccurrences = function(arr, value) {
    let count = 0;
    arr.forEach( num => {
        if(num === value) {
            count++;
        }
    });
    return count;
}
console.log(numbers);
console.log("the number 10 is repeated :"+countOccurrences(numbers, 10)+" times");
console.log(`the number 6 is repeated :${countOccurrences(numbers, 6)} times`);

////////////////////

// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.

////// put your answer here ...........
const numbers1 = [-1,-2,-3,10,-100,6,9,70];
const positiveNumbers = [];
numbers1.forEach( num => {
    if(num >= 0) {  
        positiveNumbers.push(num);
    }else{
        console.log(`${num} is a negative number and will be removed`);
        // numbers1.splice(numbers1.indexOf(num),1);
        // console.log(numbers1);  
    }   
});
console.log(numbers1);
console.log(positiveNumbers);   

////////////////////
// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////
// const arr = [[1,2,3],[10,20,30],[50,60,100]]
// console.log(arr) /////====> [1,2,3,10,20,30,50,60,100]
console.log("Flatten an Array of Arrays:");
////// put your answer here ...........
const arrOfArr = [[1,2,3],[10,20,30],[50,60,100]];
let flattenedArray = [];
arrOfArr.forEach( subArr => {
    console.log(subArr);  
    // flattenedArray.push(...subArr);
    flattenedArray = flattenedArray.concat(subArr);
    console.log(flattenedArray);
});
// console.log(flattenedArray);

// Advanced Problems:://////////////////////////////////////////////////////////////////////////////

// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.
////// put your answer here ...........
 const numbersDuplicated = [2,10,5,7,10,8,50,10,50,8,200] ;
const uniqueNumbers = [];
numbersDuplicated.forEach( num => {
    if(!uniqueNumbers.includes(num)) {
        uniqueNumbers.push(num);
    }
});
console.log(uniqueNumbers);
//////////////////////////////////
// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.
////// put your answer here ...........
const arrayWithSpecificElements = [1,2,3,4,5,3,6,3,7,8,9];
const removeSpecificElement = function(arr, value) {
    arr.forEach( (num, index) => {
        if(num === value) {
            arr.splice(index, 1);
        }   
    });
    return arr;
}   
console.log(removeSpecificElement(arrayWithSpecificElements, 3));
////////////////////////////////////
// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method.
////// put your answer here ...........
const unsortedArray = [5,3,2,1,4,10,8,6,7,9];
const sortArrayDescending = function(arr) {
    return arr.sort((a,b) => b-a);
}   
console.log(sortArrayDescending(unsortedArray));
////////////////////////////////////
// Find the Second Largest Number:
// Use forEach to find the second largest number in an array.