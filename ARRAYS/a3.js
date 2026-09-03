//Second Max Element From an Array 

let arr = [10,20,40,90,10,10,10,10,80,100];

max = Math.max(arr[0],arr[1]);
sec_max = Math.min(arr[0],arr[1]);

for(i=2;i<arr.length;i++){
    if(arr[i]>max){
        sec_max = max;
        max = arr[i];
    }
    else if(arr[i]>sec_max && arr[i]!=max){
        sec_max = arr[i];
    }
}

console.log(max);
console.log(sec_max);