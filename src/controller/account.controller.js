const express = require("express");
const router = express.Router();
const User = require("../model/account.model");
const emailValidator = require("email-validator");

router.post("/accAuth", async(req, res) => {
    try{
        const useraccount = await User.create(req.body);
        return res.status(201).send(useraccount);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.get("/accAuth", async(req, res) => {
    try{
        const useraccount = await User.find().lean().exec();
        console.log(useraccount)
        return res.status(201).send(useraccount);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.patch("/accAuth/:id", async(req, res)=>{
    try{
        const useraccount = await User.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new: true
            })
        return res.status(201).send(useraccount);
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/accAuth/:id", async(req, res)=>{
    try{
        const useraccount = await User.findByIdAndDelete(
            req.params.id
        )
        return res.status(201).send(useraccount)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;