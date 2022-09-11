// let fs = require("fs");

// const fileName = process.argv[2];

// // fs.writeFileSync("file.txt", "hello World");

// // fs.appendFileSync("file.txt", "\nHe hi hello")

// console.log("start reading");

// fs.readFile(fileName, "utf-8", (error, data) => {
//     if(error) console.log(error);
//     console.log(data);
// });

// console.log("end of reading");


// function func(a, b, callBack){
//     if(a > b){
//         callBack();
//     }
//     else{
//         console.log("1");
//     }
// }

// func(10, 1, (a=12) => console.log(a));


const express = require("express");
const bodyParser = require("body-parser");
let usersRouter = require("./routers/usersRouter");
let carsRouter = require("./routers/carsRouter");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/cars", carsRouter);

app.listen(8080, () => {
    console.log("Server Started")
});