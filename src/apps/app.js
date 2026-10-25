import express from "express";
import rateLimit from "express-rate-limit";


const app =express();

app.use(express.json());

//secure from brutforce attack
const loginLimiter =rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    limit: 5,
    message:{message:"Too many login requests, please try again later"}
})

app.get("/api/login",loginLimiter,(req,res)=>{
    res.send("Hello from login")
})


export default app;