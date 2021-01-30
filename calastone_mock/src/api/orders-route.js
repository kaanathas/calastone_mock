const express=require('express');
const respose=require('../services/orders-type-helper')
const route= express.Router();


route.post('/',(req,res)=>{
    var orderType=req.body.orderType
  console.log(orderType)
    if(orderType=="SubscriptionOrder"){
        var data= respose.SubscriptionOrder()
        console.log(data)
        res.status(201).send(respose.SubscriptionOrder())

    }else if(orderType=="RedemptionOrder"){
        res.status(201).send(respose.RedemptionOrder())

    }else{
        
        res.send("The ordertype invalid ")
    }
})


route.get('/',(req,res)=>{
    console.log(req.query.updated)
    if(req.query.updated){
        var responceData=respose.orderByUpdatedDate()
        res.status(200).send(responceData)
    }else{
        var responceData=respose.allOrders()
        res.status(200).send(responceData)
    }
  
})

 route.get('/:id',(req,res)=>{
    var responceData=respose.orderByeId()
    res.status(200).send(responceData)
 })
 




module.exports=route;