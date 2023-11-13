const mongoose =require("mongoose");
const Schema =mongoose.Schema;
// const Specialcircular =new Schema({
//     coin:{
//         type:String,
//         require:true
//     },
//     year:{
//         type:String,
//         require:true 

//     },
//     mint:{
//         type:String,
//         require:true 
//     },
//     img:{
//         type:String,
//         require:true
//     }
// })
const Specialcircular =new Schema({
    coin:{
        type:Object,
        require:true
    }
})
module.exports =mongoose.model("Specialcircular",Specialcircular,"detail");
// module.exports =mongoose.model("Specialcircular",Specialcircular,"specialcircular");
