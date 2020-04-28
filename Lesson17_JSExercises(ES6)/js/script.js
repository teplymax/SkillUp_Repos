//======task1========================================================

// var val= prompt("Vvedit zminnu");
// let CheckValue=(val)=>{
//     (val>0 && val<5) ? alert('Virno') : alert('Ne virno');
// }
// CheckValue(val);

//======task2========================================================

// let ViewSeason= function(num){
//     let result=0;
// switch(num){
//     case '1':
//         result='Winter';

//         break;
//     case '2':
//         result='Spring';

//         break;
//     case '3':
//         result='Summer';

//         break;
//     case '4':
//         result='Autumn';
//         break;
//     default:
//         result='ERROR!';
//         break;
// }
// return result;
// }
// let num=prompt('Vvedit num') ;

// console.log(ViewSeason(num));

//======task3========================================================

// function Row(str){
//     this.content=str;
//     this.FindWord=function(firstsymbol,length){
//         let word=this.content.substr(firstsymbol,length);
//         return word;
//     }
//     this.FindPositionOf=(substr)=>{
//           return this.content.indexof(substr);
//     }
//     this.ViewLengthfOfRow=()=>{
//         return this.content.length;
//     }
//     this.RaplaceSubstr=(WhatToReplace,word){
//         return this.content.replace(WhatToReplace,word);
//     }
// }
// let str1=new Row('aaa bbb ccc');
// let firstsymbol=prompt('Enter index of first symbol of word that you want to find'), length=prompt('Enter length of word that you want to find');
// console.log(str1.FindWord(firstsymbol,length));

//======task4========================================================

// function Row(Str){
//     this.content=Str;
//     this.FindPositionOf=(Substr)=>{
//           return this.content.indexOf(Substr);
//     }
//     this.ViewLengthfOfRow=()=>{
//         return this.content.length;
//     }
//     this.ReplaceSubstr=(WhatToReplace,Word)=>{
//         return this.content.replace(WhatToReplace,Word);
//     }
// }
// let Str1=new Row(prompt('Enter string'));
// let Substr=prompt('Enter substring'), WhatToReplace=prompt('Enter  word that you want to replace'), Word=prompt('Enter  word  you paste');
// console.log('Index of substring:' + Str1.FindPositionOf(Substr));
// console.log('length of string' + Str1.ViewLengthfOfRow());
// console.log('After replace' + Str1.ReplaceSubstr(WhatToReplace,Word));

//======task5=================================================

// function Row(Str){
//     this.content=Str;
//     this.CheckStartOfRow=(word)=>{
//         return this.content.startsWith(word);
//     }
// }
// let str = new Row(prompt('Enter string: ')) , word = prompt('Enter the word which string may starts with: ');
// console.log(str.CheckStartOfRow(word));

//======task6===============================================

// let GetDay= function(number){
//     let result=0;
//     switch(number){
//         case '1':
//             result = 'Понеділок';
//             break;
//         case '2':
//             result = 'Вівторок';
//             break;
//         case '3':
//             result = 'Середа';
//             break;
//         case '4':
//             result = 'Четвер';
//             break;
//         case '5':
//             result = 'П\'ятниця';
//             break;
//         case '6':
//             result = 'Субота';
//             break;
//         case '7':
//             result = 'Неділя';
//             break;
//         default:
//             result = 'error' ;
//             break;
//     }
//     return result;
// }
// let number = prompt('Enter number of a day of week which you want to get:');
// console.log(GetDay(number));

//======task7==============================

// function GetStringOfNumbers(length){

//     let str='';
//     for(let i=1; i<=length;i++){

//         (i == length) ? str = str +'-' + i + '-' : str = str +'-' + i;

//     }
//     return str;
// }
// let length = prompt('Enter length of string which you want to get');
// console.log(GetStringOfNumbers(length));

//======task8==============================

// let GetRandomNumbers=(length)=>{
//     let randomNumbers = [];
//     for(let i = 0;i<length;i++){
//         randomNumbers.push(Math.floor((Math.random()*10)+1));
//     }
//     return randomNumbers;
// }
// let length = prompt('Enter count of random numbers which you want to get:');
// console.log(GetRandomNumbers(length));

//======task9==============================

// function AddContentToEnd(array, number){
//     let i=0
//     while(i<number){
//         array.push(prompt('Enter a new element of array which you want to add: '));
//         i++;
//     }
//     return array;
// }
// let array = [], length = prompt('Enter length of array:');
//  for(let i=0;i<length;i++){
//     array.push(prompt('Enter element #' + i + ':'));
//  }
// let number = prompt('Enter number of new elements you want to add to the array: ');
// console.log('New array: ' + AddContentToEnd(array, number));

//======task10==============================

// function AddContentToStart(array, number){
//     let i=0
//     while(i<number){
//         array.unshift(prompt('Enter a new element of array which you want to add: '));
//         i++;
//     }
//     return array;
// }
// let array = [], length = prompt('Enter length of array:');
//  for(let i=0;i<length;i++){
//     array.push(prompt('Enter element #' + i + ':'));
//  }
// let number = prompt('Enter number of new elements you want to add to the array: ');
// console.log('New array: ' + AddContentToStart(array, number));

//======task11==============================

// function ViewLastElement(array){
//     return array[array.length-1];
// }
// let array = [], length = prompt('Enter length of array:');
// for(let i=0;i<length;i++){
//     array.push(prompt('Enter element #' + i + ':'));
// }
// console.log('Last element of the array:' + ViewLastElement(array));

// //======task12==============================

// function CopyElementsToNewArray(array, begin, end) {
//   let newarray = array.slice(begin, end);
//   return newarray;
// }
// let array = [],
//   length = prompt("Enter length of array: ");
// for (let i = 0; i < length; i++) {
//   array.push(prompt("Enter element of arrat: "));
// }
// let begin = prompt(
//     "Enter first point of array from what you want to copy elements(from 0): "
//   ),
//   end = prompt("Enter enter end point of array(it will be not included): ");
// console.log(array);
// console.log(CopyElementsToNewArray(array, begin, end));

//======task13==============================

// function CopyElementsToNewArrayWhithSomeNew(array, begin, count) {
//   let newarray = array.splice(begin, count, "11");
//   return newarray;
// }
// let array = [],
//   length = prompt("Enter length of array: ");
// for (let i = 0; i < length; i++) {
//   array.push(prompt("Enter element of arrat: "));
// }
// let begin = prompt(
//     "Enter first point of array from what you want to paste elements to(from 0): "
//   ),
//   count = prompt("Enter enter end point of array(it will be not included): ");
// console.log(array);
// console.log(CopyElementsToNewArrayWhithSomeNew(array, begin, count));

//======task14==============================

// let FillArray = function (array, length){

//     for(let i=1;i<=length;i++){
//         let content = '';
//         for(let j=0;j<=i;j++){
//             content += i;
//         }
//         array.push(content);
//     }

//     return array;

// }
// let array = [], length = prompt('Enter length of array which you want to get');
// console.log(FillArray(array,length));

//======task15=============================

// let arrayFill = (array, item, length) => {
//     for(let i = 0;i<length;i++){
//         array.push(item);
//     }
//     return array;
// }
// let array = [], item = prompt('Enter the value which will fill your array:  '), length = new Number(prompt('Enter length of array: '));
// console.log(arrayFill(array, item, length));

//======task16=============================

// function CheckArray(array){
//     let NumberOfElements =sum = new Number(0);
//     for(let i of array){
//         sum += array[i];
//         if(sum > 10) {
//             NumberOfElements = i+1;
//             break;
//         }
//     }
//     return NumberOfElements;
// }

// let array = [], length = prompt('Enter length of array which you want to get');
// for(let i = 0; i < length; i++){
//     array.push(Math.floor(Math.random()*10));
// }
// console.log(array);
// console.log('Sum of first ' + CheckArray(array) + 'elements is more than 10 ');

//======task17=============================

// let FillArrayWithRandomNumbers = function (array,length){
//     for(let i = 0; i < length; i++){
//         array.push(Math.floor((Math.random()*10)+1));
//     }
//     return array;
// }
// let array = [], length = prompt('Enter length of array which you want to get');
// FillArrayWithRandomNumbers(array, length);
// console.log(array);

//======task18=============================

// function GetMultiplicationTable(){
//     for(let i = 0; i <= 10; i++){
//         console.log(`Табличка множення числа ${i}: `);
//         for(let j = 0; j <= 10; j++){
//             console.log(`${i} x ${j} = ${i*j}`);
//         }
//     }
// }
// GetMultiplicationTable();

//======task19=============================

// let ReverseArray = (array) => {
//   let newarray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newarray.push(array[i]);
//   }
//   return newarray;
// };

// let array = [],
//   length = prompt("Enter length of array: ");
// for (let i = 0; i < length; i++) {
//   array.push(prompt("Enter element of arrat: "));
// }
// console.log(array);
// console.log("Reversed array: " + ReverseArray(array));

//======task20=============================

// function SumOfArrayElements(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       sum += array[i][j];
//     }
//   }
//   return sum;
// }
// let array = [[1, 2, 3], [4, 5], [6]];

// console.log(SumOfArrayElements(array));

//======task21=============================

let GetDigitsSum = function (digit) {};

//======task22=============================

// function IsPositive(array) {
//   let postivelements = array.filter(function (item) {
//     return item > 0;
//   });
//   return postivelements;
// }
// let array = [],
//   length = prompt("Enter length of array: ");
// for (let i = 0; i < length; i++) {
//   array.push(prompt("Enter element of arrat: "));
// }
// console.log(array);
// console.log(IsPositive(array));

//======task23=============================

// function GetNumbers() {
//   for (let i = 100; i <= 999; i++) {
//     if (Math.floor(i / 100) + Math.floor((i % 100) / 10) + (i % 10) > 9)
//       console.log(i);
//   }
// }
// GetNumbers();

//======task24=============================

// let users = {
//   Alan: { online: false },
//   Jeff: { online: true },
//   Sarah: { online: false },
// };
// for (let i in users) {
//   if (users[i].online === true) console.log(i);
// }
