const express =require('express');
const Routes = express.Router();
const Mycollections = require('../Controlers/Mycollections');
const Antique = require('../Controlers/Antique');
const regular =require("../Controlers/Regularcircular");
const special =require("../Controlers/Specialcircular");
const Missmint =require("../Controlers/Missmint");




Routes.get('/',(req,res)=>{res.send("hello routes working")});

Routes.get('/collections',Mycollections.getmycollections);
Routes.get('/antiques',Antique.getantiques);
Routes.get('/regular',regular.getregularcircular);
Routes.get('/special/:item',special.getspecialcircular);
Routes.get('/specialcircular',special.getspecial);
Routes.get('/mint',special.getmint);
Routes.get('/missmint',Missmint.getmissmint);







module.exports=Routes;