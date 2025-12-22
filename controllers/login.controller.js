import bcrupt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { user } from './signup.controller.js'


export const login = async (req,res)=>{
    const {username,password} = req.body;
    const compare = await bcrupt.compare(password,user.password)
    if(!compare || username !== user.username) return res.send('Invalid Username or password')
    
    const token = jwt.sign(
        {id:1},
        process.env.JWT_SECRET,
        {expiresIn:"1h"}
    )
    res.json({message:"Login Successfull.",token})
}

