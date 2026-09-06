//Reverse Array Without Temp :

let arr = [10,40,50,59,50];

let i = 0;
let j = arr.length-1;

while(i<j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}

console.log(arr);
