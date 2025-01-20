import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export default async function jwtsign(id){
  try{
    const jwtsigned = jwt.sign(id,process.env.JWT_SECRET)
    return jwtsigned
  }catch(err){
    console.log("error occured",err)
  }
}
export function Jwtverify(id){
 return jwt.verify(id,process.env.JWT_SECRET)
}