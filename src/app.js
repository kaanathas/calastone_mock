const express =require('express')
const token=require('./api/token-route')
const order=require('./api/orders-route')
const app=express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/token',token);
app.use('/orders',order)






module.exports.server=(port)=>{
 app.listen(port,()=>{
    console.log(`calastone running on port ${port}`)
 })
}