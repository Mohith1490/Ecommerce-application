import bcrypt from 'bcrypt'

export default async function BcryptPassword(password) {
    try{
        const hashedpassword = await bcrypt.hash(password, 10)
        return hashedpassword
    }catch(err){
        console.log("bcrypt err ",err)
    }
}