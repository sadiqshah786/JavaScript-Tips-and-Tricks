// // 1. Write a JavaScript program to display the current day and time in the following format.
// // Sample Output: Today is: Tuesday.
// // Current time is: 10 PM: 30 : 38

// let date = new Date();
// let month = date.getMonth() + 1;
// let day = date.getDate() + 1;
// let year = date.getFullYear();


// function currentDayTime() {
//     let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     // find day 
//     let day = dayNames[date.getDay()];
//     let hr = date.getHours();
//     // find time 
//     let time = `${hr} : ${date.getMinutes()} : ${date.getSeconds()}`;
//     // find AM and PM 
//     let amPm = hr % 12 == 0 ? 'PM' : 'AM';
//     return {
//         Today: `Today is ${day}`,
//         Time: `Current time is : ${time}`
//     }
// }
// // console.log(currentDayTime())



// // 2. Write a JavaScript program to get the current date.  
// // Expected Output :
// // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// const currentDate = (formatType) => {
//     if (formatType === 'mm-dd-yy') {
//         return `${month} ${seprator} ${day} ${seprator} ${year}`
//     }
//     else if (formatType === "mm/dd/yyyy") {
//         return `${month} / ${day} / ${year}`
//     }
//     else if (formatType === "dd-mm-yyyy") {
//         return `${day} / ${month} / ${year}`
//     }
//     else if (formatType === "dd/mm/yyyy") {
//         return `${day} / ${month} / ${year}`
//     }
//     else {
//         return 'Invalid date format'
//     }
// }
// // console.log(currentDate('mm/dd/yyyy'))



// // leap year 
// const leapYear = (year) => {
//     let getLeapYear = (year % 100 === 0) ? (year % 4 === 0) : (year % 400 === 0);
//     let leapYear = getLeapYear ? "Leap Year" : "Not leap Year"
//     return leapYear;
// }
// // console.log(leapYear(2400));


// const guessMatch = (userPrompt) => {
//     let guessNumber = Math.floor(Math.random() * 10);
//     if (userPrompt === guessNumber) {
//         return `Good Work ${guessNumber}`
//     }
//     else {
//         return `Not Match ${guessNumber}`
//     }
// }
// // console.log(guessMatch(2))


// const getUrl = () => {

//     return window.location.href = "www.google.com";
//     // return document.URL = "www.google.com"
// }
// // console.log(getUrl())


// // Write a JavaScript exercise to get the filename extension. 
// const fileNameEx = (fileName) => {
//     return fileName.split('.').pop();
// }
// // console.log(fileNameEx('index.html'));


// function sumTriple(a, b) {
//     return a == b ? (3 * (a + b)) : a + b;
// }

// // console.log(sumTriple(10, 20));
// // console.log(sumTriple(10, 10));


// function diffrenceNumber(specifiedNumber) {
//     return specifiedNumber <= 19 ? 19 - specifiedNumber : 3 * specifiedNumber;
// }

// // Log the result of calling the diff_num function with the argument 12 to the console
// // console.log(diffrenceNumber(12));

// // Log the result of calling the diff_num function with the argument 19 to the console
// // console.log(diffrenceNumber(19));

// // Log the result of calling the diff_num function with the argument 22 to the console
// // console.log(diffrenceNumber(22)); 


// function test50(x, y) {
//     return ((x === 50) || (y === 50)) || (x + y === 50);
// }

// // console.log(test50(50, 50));

// // console.log(test50(20, 50));

// // console.log(test50(20, 20));

// // console.log(test50(20, 30));




// function addString(string) {
//     // console.log(string.substring(0, 2))
//     return `${string.split(' ').includes('Py') ? string : `Py ${string}`}`
// }
// // console.log(addString("Py sadiq shah"));

// // Write a JavaScript program to remove a character at the 
// // specified position in a given string and return the modified string.  


// // function removeString(string) {
// // return string.slice(0, string) +
// // }


// function sortString(string) {
//     return string.split('').sort().join();
// }
// // console.log(sortString('123676878'))


// function secondGreatesNumber(arr) {
//     arr.sort((a, b) => {
//         return a - b;
//     })
//     return arr[1];
// }

// // console.log(
// //     secondGreatesNumber([3, 5, 6, 5, 7, 23, 1, 5, 67, 87])
// // )



// function minNumber(arr) {
// //     let min = 0;
// //     let minNumber;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// return min;
// }
// console.log(
//     minNumber([3, 5, 6, 5, 7, 23, 1, 5, 67, 87])
// )
//





let textArea = document.querySelector("textarea");

const initialHeight = parseInt(getComputedStyle(textArea).getPropertyValue('height'));

textArea.addEventListener("input", () => {
    textArea.style.height = `${initialHeight}px`;
    const newHeight = textArea.scrollHeight - initialHeight;
    textArea.style.height = `${newHeight}px`;


})





