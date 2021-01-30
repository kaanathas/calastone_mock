const express=require('express');
const route= express.Router();
const token= require('../services/generate-token')
route.post('/',(req,res)=>{
    var data=req.body

    if(data.escope="orderapi"&& data.client_id==1&&data.client_secret==123){
        res.send(token.gentoken())
    }else{
        res.send("invalid client_id")
    }
    
})


module.exports=route;