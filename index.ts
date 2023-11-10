import express, { Application,Request,Response } from 'express';
import http  from 'http';

const app:Application=express();
const server=http.createServer(app);
const port=8000;


app.get('/',(req:Request,res:Response)=>{
    res.send({
        version:"0.0.1"
    })
})

server.listen(port,()=>{
console.log(`Server running on http://localhost:8000`)
})