const express = require("express");
const defaultExercises = require("./defaultExercises");
const states = require("./states.js");
const trackerModel = require("./trackerModel");

const router = express.Router();


router

    .post("/states", (req,res) => {

        let str = "test"
        console.log(req.body.search)
        if(str.includes(req.body.search)){
            console.log("match found");
        }else{
            console.log("no match");
        }



        // let results = states.filter(search => search.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
        // console.log(results);
        res.status(201);
    })








    .get("/users", (req, res) => res.send(trackerModel.users))
    .post("/users/newUser", (req, res) => {
        let user = trackerModel.users.find(x => ((x.name == req.body.name) && (x.password == req.body.password)));
        console.log(user);
        if (user) {
            res.status(201).send(user);
        } else {
            let user = { name: req.body.name, id: trackerModel.users.length, todoList: [], doneList: [], fbid: req.body.fbid, picture: req.body.picture, password: req.body.password };
            user.todoList.push({ name: "Cardio" });
            user.todoList.push({ name: "Stretching" });
            user.todoList.push({ name: "Weightlifting" });
            trackerModel.users.push(user);

            res.status(201).send(user);
        }
    })
    .post("/users/user/logOut", (req, res) => {


        let userIndex = trackerModel.users.findIndex(x => ((x.name == req.body.u.name) && (x.password == req.body.u.password)));
        console.log(userIndex);
        trackerModel.users.splice(userIndex, 1);
        res.status(201).send(null);
    })
    .post("/users/user/completeExercise", (req, res) => {
        let userIndex = trackerModel.users.findIndex(x => ((x.name == req.body.u.name) && (x.password == req.body.u.password)));
        console.log(userIndex);
        console.log(trackerModel.users);
        console.log(userIndex);
        trackerModel.users[userIndex].doneList.push(req.body.x);
        trackerModel.users[userIndex].todoList.splice(req.body.i, 1);

        res.status(201).send(trackerModel.users[userIndex]);
    })
    .post("/users/user/removeExercise", (req, res) => {
        let userIndex = trackerModel.users.findIndex(x => ((x.name == req.body.u.name) && (x.password == req.body.u.password)));
        trackerModel.users[userIndex].doneList.splice(req.body.i, 1);

        res.status(201).send(trackerModel.users[userIndex]);
    })
    .post("/users/user/addExercise", (req, res) => {
        let userIndex = trackerModel.users.findIndex(x => ((x.name == req.body.u.name) && (x.password == req.body.u.password)));
        trackerModel.users[userIndex].todoList.push({ name: req.body.x });

        res.status(201).send(trackerModel.users[userIndex]);
    })
    .post("/users/user/removeDone", (req, res) => {
        let userIndex = trackerModel.users.findIndex(x => ((x.name == req.body.u.name) && (x.password == req.body.u.password)));
        trackerModel.users[userIndex].doneList.splice(req.body.i, 1);

        res.status(201);
    })
    .post("/users/user/stealExercise", (req, res) => {
        let userIndex = trackerModel.users.findIndex(x => ((x.name == req.body.u.name) && (x.password == req.body.u.password)));
        trackerModel.users[userIndex].todoList.push(req.body.x);

        res.status(201).send(trackerModel.users[userIndex]);
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