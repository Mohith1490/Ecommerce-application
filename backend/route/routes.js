import express from "express";
import User from "../Schemas/UserSchema.js";
import jwtsign, { Jwtverify } from "../jwtmethods/jwtmethods.js";
import BcryptPassword from "../jwtmethods/passwordhashing.js";

const router = express.Router()

router.post("/api/auth/signup", async (req, res) => {
  const hashedpassword = await BcryptPassword(req.body.password)
  const result = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedpassword
  })
  await result.save()
  const jwtsigned = await jwtsign(result._id)
  res.status(402).json({ token: jwtsigned })
})

router.post("/verify",(req,res)=>{
  const id = Jwtverify(req.body.token)
  const isUser = User.findById(id)
  if(isUser){
    res.json(true).status(200)
  }
  else{
    res.json(false).status(404)
  }
})

export default router