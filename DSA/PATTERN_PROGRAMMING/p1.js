let prompt = require("prompt-sync")()
let n = Number(prompt("Enter The Number"))

for(i=1;i<=n;i++){
    for (let j = 0; j <=n; j++) {
        process.stdout.write("* ")
    }
    console.log();
}