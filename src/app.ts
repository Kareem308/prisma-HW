import  express  from "express";
import { Ipeople, Igrade, ITask } from "./types/generaltype";

const app = express();


let people: Ipeople[] = [];
let grades: Igrade[] = [];
let tasks: ITask[] = [];


// people
app.get('/people', (req, res) => {
    return res.json(people);
  });

  app.post('/name', (req, res) => {
    const addnew = req.body as Ipeople;
    people.push(addnew);
    return res.json({
      message: ' name added:'
    });
  });
  app.put('/people/:id', (req, res) => {
    const updated = req.body as Ipeople;
    const { id } = req.params;
  
    const updatedList = people.filter((peoples) => {
      return peoples.id !== id;
    });
  
    updatedList.push(updated);
  
    people = updatedList;
  
    return res.json({
      message: 'people updated',
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


  // gread
app.get('/grades', (req, res) => {
    return res.json(grades);
  });

  app.post('/grades', (req, res) => {
    const addnewgrade = req.body as Igrade;
    grades.push(addnewgrade);
    return res.json({
      message: ' grade added:'
    });
  });
  app.put('/grades/:id', (req, res) => {
    const updatedgrades = req.body as Igrade;
    const { id } = req.params;
  
    const updatedgradesList = grades.filter((grade) => {
      return grade.id !== id;
    });
  
    updatedgradesList.push(updatedgrades);
  
    grades = updatedgradesList;
  
    return res.json({
      message: 'grade updated',
    });
  });

  app.delete('/grades/:id', (req, res) => {
    const { id } = req.params;
  
    const newListgrade = grades.filter((grade) => {
      return grade.id !== id;
    });
  
    grades = newListgrade;
  
    return res.json({
      message: 'grade deleted',
    });
  });

//task

app.get('/tasks', (req, res) => {
    return res.json(tasks);
  });

  app.post('/tasks', (req, res) => {
    const addnewtasks = req.body as ITask;
    tasks.push(addnewtasks);
    return res.json({
      message: 'task added:'
    });
  });
  app.put('/tasks/:id', (req, res) => {
    const updatedtasks = req.body as ITask;
    const { id } = req.params;
  
    const updatedtasksList = tasks.filter((task) => {
      return task.id !== id;
    });
  
    updatedtasksList.push(updatedtasks);
  
    tasks = updatedtasksList;
  
    return res.json({
      message: 'task updated',
    });
  });

  app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
  
    const newListtasks = tasks.filter((task) => {
      return task.id !== id;
    });
  
    tasks = newListtasks;
  
    return res.json({
      message: 'task deleted',
    });
  });
  

app.listen(5000);