const prompt = require("prompt-sync")();
let n = Number(prompt("Enter The Number"))

for(let i=1;i<=n;i++){
   for(j=1;j<=n;j++){
    if(i==j || (i+j == n+1))process.stdout.write("* ");
     else process.stdout.write("  ");
   }
   
   console.log();
}