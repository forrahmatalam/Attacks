import express from "express";

const app =express();

app.use(express.json());

app.get("/api/login",(req,res)=>{
    res.send("Hello from login")
})


export default app;