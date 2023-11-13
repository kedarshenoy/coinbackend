const mongoose = require('mongoose');
const Scheema =mongoose.Schema;

const specialcircular=new Scheema({
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
})

module.exports=mongoose.model("speacialcircular",specialcircular,'specialcircular')