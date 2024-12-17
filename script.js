const prompt = require("prompt-sync")()
const fs = require("fs")

const text=  prompt("enter the data:- ")
fs.writeFileSync("example.txt", text)
console.log("file created successsfully");


const data=
fs.readFileSync("example.txt", "utf-8")
console.log(data);
