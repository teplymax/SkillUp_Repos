// let arr=[];
// let el=prompt("VVodte elementy masiva");
// while(el!=null){
//     arr.push(el);
//     el=prompt("VVodte elementy masiva");
// }
// alert(arr);
// //============================
// arr=[
//     [1,1,3,4],
//     [1,1,3,4],
//     [1,1,3,4]
// ]
// let sum=0;
// for(let i=0;i<3;i++)
// {
//     for(let j=0;j<4;j++)
//     {
        
//         sum=sum+arr[i][j];
//     }
// }
// alert(sum);
// //==================
// let str='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusantium.'
// let a= str.split(' ');

// for(let i=0;i<a.length;i++)
// {
//     if(a[i].length>5) {console.log(a[i]);}
// }
// var arr1=[1,9,22,7,6];
// arr1.splice(3,0,8);
// console.log(arr1);

// let arr2= [1, 2, 3];
// arr2.reverse();
// alert(arr2);
// let arr = [23,45,12,1,8];  let a=prompt("Input your digit");     
// function checkPrompt(arr,item)
// {        
//     if(arr.indexOf(item)!=-1){     console.log('+');   }  
//         else{         console.log('-'); }        
//      }  checkPrompt(arr,a);
str='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusantium.';
let arr=str.split(' ');
console.log(arr);
let max=0, pos=0;

for (let i of arr) {
    if(arr[i].length>max){
        max=arr[i].length;
        pos=i;
    }
}
alert(arr[pos]);