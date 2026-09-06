let arr = [1,2,3,5,7,8];
let count = 0;
let target = 12;

for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            count++;
        }
    }
}

console.log(count);
