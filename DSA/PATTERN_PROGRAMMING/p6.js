const prompt = require("prompt-sync")();
let n = Number(prompt("Enter The Number"))

for(let i=1;i<=n;i++){
   for(j=1;j<=n-i;j++){
    process.stdout.write(" ");
   }
   for(j=1;j<=i;j++){
    process.stdout.write("*");
   }
   console.log();
}