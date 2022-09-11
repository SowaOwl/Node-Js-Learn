let express = require("express");
let usersRouter = express.Router();
let fs = require("fs");
let { getFileData } = require("./../modules/helper");

const usersFileName = "./users.txt";

usersRouter.get("/", (req, res) => {
    res.status(200).send(getFileData(usersFileName))
})

usersRouter.get("/:id", (req, res) => {
    let id = req.params.id;
    let users = getFileData(usersFileName);
    let idx = users.findIndex(item => item.id == id);    

    if(idx != -1){
        res.status(200).send(users[idx]);
    }else{
        res.status(404).send("Пользователь с таким ID не найден");
    }
})

usersRouter.post("/registration", (req, res) => {
    let { fullName, login, password } = req.body;

    let users = getFileData(usersFileName);
    let idx = users.findIndex(item => item.login === login);

    if (idx != -1) {
        res.status(403).send("Этот логин занят")
    } else {
        users.push({ id: users.length, fullName, login, password });
        fs.writeFileSync(usersFileName, JSON.stringify(users));
        res.status(201).send("Пользователь добавлен");
    }
})

usersRouter.post("/login", (req, res) => {
    const { login, password } = req.body;
    let users = getFileData(usersFileName);

    let idx = users.findIndex(item => item.login === login && item.password === password);
    if (idx != -1) {
        res.status(200).send(`${users[idx].fullName} Пользователь Авторизовался`);
    } else {
        res.status(403).send("Не правльный логин или пароль");
    }
})

module.exports = usersRouter;