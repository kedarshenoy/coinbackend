const Special = require("../Models/special");
const circular =require('../Models/specialcircular')

exports.getspecialcircular=(req,res)=>{
    const item =req.params.item;
    Special.find({
        coin:item
    }).then(result=>{
        res.send(result)
    }).catch(error=>{
        res.send(error);
    })
}

exports.getmint=(req,res)=>{
    Special.find().then(result=> res.send(result)).catch(error=>{console.log(error)})
}

exports.getspecial=(req,res)=>{
    circular.find().then(result=>{
        res.send(result);
    }).catch(error=>{
        res.send(result);
    })
}