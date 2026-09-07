/*
Problem: Multiplication of Previous and Next

Given an array of integers, update every element with the
multiplication of its previous and next elements.

Exceptions:
- First element = multiplication of first and second element
- Last element = multiplication of last and second-last element

Example:
Input:
2 3 4

Output:
12 8 12
*/

class Solution{
    multiplyPrevNext(arr){
        let t1 = arr[0]*arr[1];
        let t2 = arr[arr.length-1]*arr[arr.length-2];

        let prev = arr[0];
        for(let i = 1; i<arr.length-1;i++){
            let current = arr[i];
            arr[i]=prev*arr[i+1];
            prev = current ;
        }
        arr[0]=t1;
        arr[arr.length-1]=t2;

        return arr;
    }
}

module.exports = { Solution };

// TEST
let solution = new Solution();

let arr = [2, 3, 4, 8 , 10 , 20];

console.log(solution.multiplyPrevNext(arr));