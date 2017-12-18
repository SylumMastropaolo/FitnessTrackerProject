const express = require("express");
const defaultExercises = require("./defaultExercises");
const trackerModel = require("./trackerModel");

const router = express.Router();


router
    .get("/exercises", (req, res) => res.send(defaultExercises.exercises))
    .get("/users", (req, res) => res.send(trackerModel.users))
    .post("/users", (req, res) => {
        //let todoListTemp = defaultExercises.exercises;
        let user = { name: req.body.name, id: trackerModel.users.length, todoList: [], doneList: [] };
        
        trackerModel.users.push(user);
        res.status(201).send(user);
    })
    .post("/exercises", (req, res) => {//send it a user
        //console.log(trackerModel.users[req.body.u.id]);
        trackerModel.users[req.body.u.id].todoList = defaultExercises.exercises;

        res.status(201).send(trackerModel.users[req.body.u.id].todoList);
    })

    .post("/users/user", (req, res) => {
        //console.log(trackerModel.users[req.body.u.id]);
        trackerModel.users[req.body.u.id].doneList.push(req.body.x);
        trackerModel.users[req.body.u.id].todoList.splice(req.body.i, 1);

        res.status(201);
    })


module.exports.router = router;