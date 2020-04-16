function CheckRandomValue(min,max){
    let a=Math.floor(Math.random()*(max-min+1))+min;
    (a%2) ? console.log('neparne') : console.log('parne');
}
let min=1;
let max=50;
CheckRandomValue(min,max);
var str1=prompt("vvedit stroku"), str2=prompt("vvedit stroku");
function GetLongerString(str1,str2)
{
    (str1.length>str2.length) ? alert(str1) : alert(str2);
}
GetLongerString(str1,str2)
var str="lorem ipsum is simply dummy";
function GetFirtLetterUpper(str){
    
    alert(str[0].toUpperCase()+str.substring(1));
}
GetFirtLetterUpper(str);