import express from "express";
const app = express();
const port = 3000;

app.get('/', (req , res)=>{
res.send("<h1>Hello World</h1>");
})

app.get('/aboutme',(req , res)=>{
    res.send("My no is BLAH BLAH BLAH")
})

app.listen(port,()=>{
    console.log("Server is running");
})

