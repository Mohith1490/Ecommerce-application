import express from "express";

const router = express.Router()

router.get("/api/auth/signup",(req: any,res: any)=>{
    console.log(req)
})