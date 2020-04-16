//==========Task1===========
function randomNumber(number){
    let arr = [];
    for(let i=0;i<number;i++)
    {
        arr.push((Math.floor(Math.random()*(200))-100));
    }
    console.log("Array:" + arr);
    let newarr= arr.filter(function(item){
       return item>10;
    })
    console.log("New Array:" + newarr);
   
}
let number=parseInt(prompt("Vvedit kilkist chysel"));
if(Boolean(number) !==false) {randomNumber(number)} 
else console.log("error");
//===========Task2=================
function SortString(str){
    let array=str.split(' ');
    console.log(array);
    function compareNumeric (a, b){ 
        if (a>b) return 1 ;
        if (a==b)return 0 ;
        if (a<b) return -1 ;
    }
    array=array.sort(compareNumeric);
    console.log(array);
    str=array.join(' ');
    console.log(str);
}
let str = prompt("Vvedit stroku");
SortString(str);
