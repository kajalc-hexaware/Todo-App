const express = require('express')
const router = express.Router()
const Note= require('../models/note')
router.get('/', async(req,res) => {
    try{
           const notes = await Note.find()
           res.json(notes)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const note = await Note.findById(req.params.id)
           res.json(note)
    }catch(err){
        res.status(404).send('No such note Exists')
    }
})

router.post('/', async(req,res) => {
    const note = new Note({
        title: req.body.title,
        body: req.body.body
        
    })

    try{
        const a1 =  await note.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const note = await Note.findById(req.params.id) 
        note.title = req.body.title
        note.body = req.body.body
        const a1 = await note.save()
        res.json(a1)   
    }catch(err){
        res.status(400).send('No such note Exists')
    }

})


router.delete('/:id',async(req,res)=>{
    try{
        const note = await Note.findById(req.params.id)
        const a1= await note.remove()
        res.json(a1)
 }catch(err){
     res.status(400).send('No such note Exists' )
 }
})



module.exports = router