const express = require("express");
const defaultExercises = require("./defaultExercises");
const trackerModel = require("./trackerModel");

const router = express.Router();


router
    .get("/defaultExercises", (req, res) => res.send(defaultExercises.exercises))
    .get("/users", (req, res) => res.send(trackerModel.users))
    // .get("/users/user", (req, res) => res.send(trackerModel.users[req.body.i]))
    .post("/users/newUser", (req, res) => {
        let user = { name: req.body.name, id: trackerModel.users.length, todoList: [], doneList: [] };
        user.todoList.push({ name: "Cardio" });
        user.todoList.push({ name: "Stretching" });
        user.todoList.push({ name: "Weightlifting" });
        trackerModel.users.push(user);
        res.status(201).send(user);
    })


    .post("/exercises", (req, res) => {//send it a user
        // console.log(trackerModel.users[req.body.u.id]);

        // trackerModel.users[req.body.u.id].todoList = exercise[{ name: "Cardio" }, { name: "Stretching" }, { name: "Weight training" }];
        // console.log(trackerModel.users[req.body.u.id]);
        // res.status(201).send(trackerModel.users[req.body.u.id].todoList);
        res.status(201);
    })

    .post("/users/user/completeExercise", (req, res) => {
        trackerModel.users[req.body.u.id].doneList.push(req.body.x);
        trackerModel.users[req.body.u.id].todoList.splice(req.body.i, 1);

        res.status(201).send(trackerModel.users[req.body.u.id]);
    })
    .post("/users/user/addExercise", (req, res) => {
        trackerModel.users[req.body.u.id].todoList.push({ name: req.body.x });

        res.status(201).send(trackerModel.users[req.body.u.id]);
    })
    .post("/users/user/removeDone", (req, res) => {
        trackerModel.users[req.body.u.id].doneList.splice(req.body.i, 1);

        res.status(201);
    })
    .post("/users/user/steal", (req, res) => {
        //idk yet
        res.status(201);
    })


module.exports.router = router;