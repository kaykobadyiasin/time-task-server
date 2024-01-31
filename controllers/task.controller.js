const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Task = require('../models/task.model');

// Get all tasks
router.get('/', (req, res) => {
    Task.find()
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

// Get a specific task by ID
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id) == false)
        res.status(400).json({
            error: 'Given object ID is not valid.'
        });
    else
        Task.findById(req.params.id)
            .then(data => {
                if (data)
                    res.send(data);
                else
                    res.status(404).json({
                        error: 'No record with given _id:' + req.params.id
                    });
            })
            .catch(err => console.log(err));
});

// Create a new task
router.post('/', (req, res) => {
    Task.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => console.log(err));
});

// Update a task by ID
router.put('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id) == false)
        res.status(400).json({
            error: 'Given object ID is not valid.'
        });
    else
        Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => {
                if (data)
                    res.send(data);
                else
                    res.status(404).json({
                        error: 'No record with given _id:' + req.params.id
                    });
            })
            .catch(err => console.log(err));
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id) == false)
        res.status(400).json({
            error: 'Given object ID is not valid.'
        });
    else
        Task.deleteOne({ _id: req.params.id })
            .then(data => {
                if (data.deletedCount > 0)
                    res.send(data);
                else
                    res.status(404).json({
                        error: 'No record with given _id:' + req.params.id
                    });
            })
            .catch(err => console.log(err));
});

module.exports = router;
