
const mycollections=require("../Models/Mycollections")


exports. getmycollections =(req,res)=>{
    mycollections.find().then(
        result=>{
            res.send(result);
        }
    ).catch(error=>{
        res.send(error);
    })
}