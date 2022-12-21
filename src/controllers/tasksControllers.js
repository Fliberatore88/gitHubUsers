const path = require('path');
const fetch = require('node-fetch');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Tasks = db.Tasks;


const tasksController = {
  list:  async function (req,res) {
    console.log(req.body)
    console.log(req.query)
    if (req.body.filterBy) {
      const tasks = await Tasks.findAll({
        where: {
         [Op.or]: [
           {
         task_name: {[Op.like]: '%'+req.body.filterBy+'%'}
        },
        {
       completed: 
         {[Op.like]: '%'+req.body.filterBy+'%'}
       }
       ]
     }
      })
      return res.status(200).json({
        total: tasks.length,
        data: tasks,
        status: 200
      })
   

    }
    else { 
      const tasks = await Tasks.findAll()
      return res.status(200).json({
        total: tasks.length,
        data: tasks,
        status: 200
      }) 
    }
  },

  create: async function (req,res) {
    const task = await Tasks.create(req.body)

    return res.status(200).json({
      data:task,
      status: 200,
      created: true
    })
  },
 
  delete: async function(req,res) {
    const task = await Tasks.destroy({
      where: {
          id: req.body.id
      }
  })
    console.log(task)
    return res.status(200).json({
      tarea_eliminada: "La tarea fue eliminada correctamente"
    })
  },
  update: async function(req,res) {
    let taskUpdate = {
      task_name: req.body.task_name,
      completed: req.body.completed
    }

    await Tasks.update(taskUpdate,{
      where: {id: req.body.id}
    })
    return res.status(200).json({
      id: req.body.id,
      task_name: taskUpdate.task_name,
      completed: taskUpdate.completed
    })
  }
}


module.exports = tasksController;