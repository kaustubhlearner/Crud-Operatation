const prompt = require("prompt-sync")()
const fs = require("fs")

const text = prompt("enter the data:- ")
fs.writeFileSync("example.txt", text)
console.log("file created successsfully");


// const data = fs.readFileSync("example.txt", "utf-8")
// console.log(data);





// fs.appendFileSync("example.txt", " amit")


// fs.unlinkSync("example.txt")
// if (!"example.txt") {
//   console.log("file not exist");
// }
// else {
//   console.log("file delete successful");

// }

// const file = prompt("enter the file:- ")
// if (fs.existsSync(file)) {
//   console.log(`this file is  exist ${file}`);
  

// }
// else {
//   console.log("file  doest not exist");

// }

// here is the full code git 