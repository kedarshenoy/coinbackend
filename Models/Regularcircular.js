const mongoose=require("mongoose");
const Scheema =mongoose.Schema;

const Regularcircular =new Scheema(
    {
        coin:{
            type:String,
            require:true 
        },
        count:{
            type:String,
            require:true
        },
        img:{
            type:String,
            require:true 

        }
    }
)

module.exports = mongoose.model("RegularCircular",Regularcircular,"regularcircular");