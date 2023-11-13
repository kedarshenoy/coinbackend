const mongoose=require("mongoose");
const Scheema =mongoose.Schema;

const Antique =new Scheema({
    coin:{
        type:String,
        require:true 
    },
    year:{
        type:String,
        require:true

    },
    metal:{
        type:String,
        require:true 
    },
    img:{
        type:String,
        require:true
    }
    
});


module.exports =mongoose.model("Antique",Antique,"antique")