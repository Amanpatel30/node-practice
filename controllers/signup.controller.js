import bcrypt from 'bcrypt'
export let user = {};
export const signUp = async (req,res) =>{

    const hashpassword = await bcrypt.hash(req.body.password,10)
    
    user.password = hashpassword;
    
    res.send("User registered.")
}
