let a=prompt("vvedit chyslo vid 25 do 99");
if(a>=25 && a<=99) alert("chyslo znahodytsya v diapazoni vid 25 do 99"); 
else{
    while(a)
     { a=prompt("vvedene chyslo ne z diapaxonu!vvedit shche raz:")
       if(a>=25 && a<=99) break;
     }
    alert("chyslo znahodytsya v diapazoni vid 25 do 99");
}
//========Task2=================
function chainToSwitch(val) {
    var answer = "";
    switch (+val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        default:
            answer = "Not a required value";
    }
    
  return answer;
}
alert(chainToSwitch(7));
//===========Task3=========================================
function findGreater(a, b) {
     return ((a > b) ? "a is greater" : "b is greater");
  }
let val1=prompt("vvedit a"), val2=prompt("vvedit b");
alert(findGreater(val1, val2)); 
//===========Task4========================
for(let i=10;i>=0;i--)
{
    console.log(i);
} 
//=========Task5=======================
function range(a, b){
for(;a<=b;a++)
{
    if(a%2!==0){console.log('chyslo z diapazonu:'+a)}
}
}
let min=+prompt("vvedit min porig diapazonu a:"), max=+prompt("vvedit max porig diapazonu b:");
if(min<max)
{console.log(range(min,max));}
else {
while(min>max)
{
    alert("a > b!Vvedit tak shchob a<b");
    min=prompt("vvedit min porig diapazonu a:"); 
    max=prompt("vvedit max porig diapazonu b:");
    if(min<max){console.log(range(min,max));}
}
}