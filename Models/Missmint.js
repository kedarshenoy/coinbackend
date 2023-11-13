const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const Missmint =new Schema({
    coin:{
        type:String,
        require:true 
    },
    year:{
        type:String,
        require:true 
    },
    mint:{
        type:String,
        require:true 
    },
    img:{
        type:String,
        require:true
    }
});

module.exports =mongoose.model('Missmint',Missmint,'missmint');