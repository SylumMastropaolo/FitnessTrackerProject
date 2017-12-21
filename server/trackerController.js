const express = require("express");
const defaultExercises = require("./defaultExercises");
const trackerModel = require("./trackerModel");

const router = express.Router();


router
    .get("/users", (req, res) => res.send(trackerModel.users))
    .post("/users/newUser", (req, res) => {
        let user = trackerModel.users.find(x => ((x.name == req.body.name) && (x.password == req.body.password)));
        console.log(user);
        if(user){
            res.status(201).send(user);
        }else{
            let user = { name: req.body.name, id: trackerModel.users.length, todoList: [], doneList: [], fbid: req.body.fbid, picture: req.body.picture, password: req.body.password };
            user.todoList.push({ name: "Cardio" });
            user.todoList.push({ name: "Stretching" });
            user.todoList.push({ name: "Weightlifting" });
            trackerModel.users.push(user);
    
            res.status(201).send(user);
        }
    })
    .post("/users/user/completeExercise", (req, res) => {
        trackerModel.users[req.body.u.id].doneList.push(req.body.x);
        trackerModel.users[req.body.u.id].todoList.splice(req.body.i, 1);

        res.status(201).send(trackerModel.users[req.body.u.id]);
    })
    .post("/users/user/removeExercise", (req, res) => {
        trackerModel.users[req.body.u.id].doneList.splice(req.body.i, 1);

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
    .post("/users/user/stealExercise", (req, res) => {
        trackerModel.users[req.body.u.id].todoList.push(req.body.x);

        res.status(201).send(trackerModel.users[req.body.u.id]);
    })

module.exports.router = router;


// .post("/users/newUser", (req, res) => {
//     let user = service.users.find(x => x.name == req.body.name);
//     if(user){
//         if(req.body.password == user.password){
//             res.status(201).send(user);
//         }
//     }
//     else{
//         let user = { name: req.body.name, id: trackerModel.users.length, todoList: [], doneList: [] };
//         user.todoList.push({ name: "Cardio" });
//         user.todoList.push({ name: "Stretching" });
//         user.todoList.push({ name: "Weightlifting" });
//         trackerModel.users.push(user);
//         res.status(201).send(user);
//     }
//     res.status(403).send("Invalid Password")
// })