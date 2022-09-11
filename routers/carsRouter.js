let express = require("express");
let carsRouter = express.Router();
let fs = require("fs");
let { getFileData } = require("./../modules/helper");

const carsFileName = "./cars.txt";

carsRouter.get("/", (request, res) => {
    res.status(200).send(getFileData(carsFileName))
});

carsRouter.post("/add", (request, response) => {
    let { model, color, year } = request.body;
    let newCarObject = { model, color, year };
    let carsArray = getFileData(carsFileName);

    carsArray.push({id: carsArray.length, model, color, year});

    fs.writeFileSync(carsFileName, JSON.stringify(carsArray));

    response.send("added");
})

module.exports = carsRouter;