let fs = require("fs");

const getFileData = (fileName) => {
    if (fs.existsSync(fileName)) {
        return JSON.parse(fs.readFileSync(fileName, "utf-8"))
    } else {
        return [];
    }
}

module.exports = {
    getFileData
};