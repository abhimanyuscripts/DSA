//Reverse The Array With Temp :

let arr = [10,40,50,59,50];
let temp = new Array(arr.length);
let i = arr.length-1;

for(j=0;j<arr.length;j++){
    temp[j]=arr[i];
    i--;
}

console.log(arr);
console.log(temp);




