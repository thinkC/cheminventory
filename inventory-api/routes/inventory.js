const express = require('express');
const router = express.Router();
const db = require('../models/index')

router.get('/', (req, res) => {
    //res.send('Hello from express router')
    db.Inventory.find()
        .then((inventories) => {
            res.json(inventories)
        })
        .catch((err) => {
            res.send(err)
        })
});

//Post 
router.post('/', (req, res) => {
    //res.send('from post router');
    console.log(req.body);
    db.Inventory.create(req.body)
        .then((newInventory) => {
            res.status(201).json(newInventory)
        })
        .catch((err) => {
            res.send(err)
        })
});

//show
router.get('/:inventoryId', (req, res) => {
    db.Inventory.findById(req.params.inventoryId)
        .then((foundInvetory) => {
            res.json(foundInvetory)
        })
        .catch((err) => {
            res.send(err)
        })
});

//update route
router.put('/:inventoryId', (req, res) => {
    db.Inventory.findOneAndUpdate({ _id: req.params.inventoryId }, req.body, { new: true })
        .then((inventory) => {
            res.json(inventory)
        })
        .catch((err) => {
            res.send(err)
        })
});

//delete route
router.delete('/:inventoryId', (req, res) => {
    db.Inventory.deleteOne({ _id: req.params.inventoryId })
        .then(() => {
            res.json({
                message: 'Inventory Deleted!'
            })

        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = router;