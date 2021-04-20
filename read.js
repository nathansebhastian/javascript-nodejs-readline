const readline = require("readline");
const fs = require("fs");

const path = "./file.txt";

const rl = readline.createInterface({
  input: fs.createReadStream(path),
});

let lineno = 1;
rl.on("line", function (input) {
  console.log("Line number " + lineno + ": " + input);
  lineno++;
});
