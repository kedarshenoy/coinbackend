const mongoose=require ('mongoose');
const Schema  =mongoose.Schema;

const Mycollections =new Schema({
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
})

module.exports=mongoose.model("Mycollections",Mycollections,"mycollections" )