

const regularcircular = require("../Models/Regularcircular");

exports.getregularcircular=(req,res)=>{
    regularcircular.find().then(
        result=>{
            res.send({
                data:result
            });
        }
    ).catch(
        error=>{
            res.send(error);
        }
    )
}