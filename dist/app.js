"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let people = [];
let grades = [];
let tasks = [];
// CRUD function for people
app.get('/people', (req, res) => {
    return res.json(people);
});
app.post('/name', (req, res) => {
    const addnew = req.body;
    people.push(addnew);
    return res.json({
        message: ' added  users:'
    });
});
app.put('/people/:id', (req, res) => {
    const updated = req.body;
    const { id } = req.params;
    const updatedList = people.filter((peoples) => {
        return peoples.id !== id;
    });
    updatedList.push(updated);
    people = updatedList;
    return res.json({
        message: 'people updated !',
    });
});
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    const newList = people.filter((peoples) => {
        return peoples.id !== id;
    });
    people = newList;
    return res.json({
        message: 'people deleted !',
    });
});
// CRUD function for gread
app.get('/grades', (req, res) => {
    return res.json(grades);
});
app.post('/grades', (req, res) => {
    const addnewgrade = req.body;
    grades.push(addnewgrade);
    return res.json({
        message: ' added  grades:'
    });
});
app.put('/grades/:id', (req, res) => {
    const updatedgrades = req.body;
    const { id } = req.params;
    const updatedgradesList = grades.filter((grade) => {
        return grade.id !== id;
    });
    updatedgradesList.push(updatedgrades);
    grades = updatedgradesList;
    return res.json({
        message: 'grades updated !',
    });
});
app.delete('/grades/:id', (req, res) => {
    const { id } = req.params;
    const newListgrade = grades.filter((grade) => {
        return grade.id !== id;
    });
    grades = newListgrade;
    return res.json({
        message: 'grades deleted !',
    });
});
//task
app.get('/tasks', (req, res) => {
    return res.json(tasks);
});
app.post('/tasks', (req, res) => {
    const addnewtasks = req.body;
    tasks.push(addnewtasks);
    return res.json({
        message: ' added  tasks:'
    });
});
app.put('/tasks/:id', (req, res) => {
    const updatedtasks = req.body;
    const { id } = req.params;
    const updatedtasksList = tasks.filter((task) => {
        return task.id !== id;
    });
    updatedtasksList.push(updatedtasks);
    tasks = updatedtasksList;
    return res.json({
        message: 'tasks updated !',
    });
});
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const newListtasks = tasks.filter((task) => {
        return task.id !== id;
    });
    tasks = newListtasks;
    return res.json({
        message: 'tasks deleted !',
    });
});
app.listen(5000);
