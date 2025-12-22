import bcrupt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {user} from './signup.controller'
export const login = (req,res)=>{
    const password = req.body.password;
    const compare = bcrupt.compare(password,user.password)
    if(compare) return res.send('Invalid password')
    console.log("object")
}
