let arr = [40,50,90,60,70,80,120,121];

highest = arr[0];

for(i=1;i<arr.length;i++){
    if(arr[i]>highest){
        highest = arr[i];
    }
}

console.log(highest);
