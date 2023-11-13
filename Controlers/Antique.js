

const antique =require("../Models/Antique")

exports.getantiques=(req,res)=>{
    antique.find().then(
        result=>{
            res.send(result);
        }
    ).catch(
        error=>{
            res.send(error);
        }
    )
}