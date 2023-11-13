const Missmint =require('../Models/Missmint');

exports.getmissmint=(req,res)=>{
    Missmint.find().then(result=>{
        res.send(result);
    }).catch(error=>{
        res.send(error)
    })
}