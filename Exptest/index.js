const express=require('express');
const PORT=3000;
const app=express();
const todos=["rohan","sohan"];


app.get("/todos",(req,res)=>{
    return res.status(200).json({
        data:todos,
        error:null
    })
})

app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work on ${PORT}`)
})