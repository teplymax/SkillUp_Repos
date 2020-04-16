//========Task1=========
 function trimString(str,maxlength){
 if(str.length > maxlength){
     str=str.slice(0,maxlength)+'...';
 }
 console.log(str);
 }
 let str=prompt("Vvedit stroku"), maxlength=prompt("Vvedit granychnodopustymu dovshynu stroky");
 trimString(str,maxlength);
//========Task2========
function searchString(str,word){
    var reg= new RegExp(word,"g");
    console.log(str.match(reg))
}
let str1=prompt("Vvedit stroku"), word=prompt("Vvedit shcho treba znaity");
searchString(str1,word);
//======Task3==========
function diffDate(date1,date2){
    var a=0, b=0;
    if(date1.getTime() > date2.getTime()){
         a= ((date1.getTime()-date2.getTime())/3600000)/24;
         b= (date1.getTime()-date2.getTime())/3600000;
    }
    else{
         a= ((date2.getTime()-date1.getTime())/3600000)/24;
         b= (date2.getTime()-date1.getTime())/3600000;
    }
console.log(`${b} godyn`);
console.log(`${a} dniv`);
}
var date1= new Date(2000,1,22,12,0,0,0);
var date2= new Date(1999,1,22,12,0,0,0);
diffDate(date1,date2);


