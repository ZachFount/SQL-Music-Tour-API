//dependencies 
const { Op } = require('sequelize');
const stages = require('express').Router()
const db = require('../models')
const { Stage, Event } = db

stages.get('/', async(req,res) => {
    try{
        const foundStages = await Stage.findAll({
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundStages)
    }
    catch (error){
        res.status(500).json(error)
    }
})

stages.get('/:name', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_name: req.params.name },
            include:{ 
                model: Event, 
                as: "events",
                through: { attributes: [] }
            },
            order: [
                [{ model: Event, as: "events" }, 'date', 'ASC'],
            ]
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.post('/', async (req,res) => {
    try {
        const newStages = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStages
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

stages.put('/:id', async (req,res) => {
    try{
        const updatedStages = await Stage.update(req.body, {
            where: {
                stages_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stages(s)`
        })
    } catch (err){
        res.status(500).json(err)
    }
})

stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stages_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stages(s)`
        })
    } catch (err){
        res.status(500).json(err)
    }
})

module.exports = stages;