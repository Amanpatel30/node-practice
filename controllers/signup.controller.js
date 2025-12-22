import bcrypt from 'bcrypt'
export let user = {};
export const signUp = async (req,res) =>{

    const { username,password } = req.body;
    if(!username || !password) return res.json({error:"Username and password is required."})
    const hashpassword = await bcrypt.hash(password,10)
    
    user.username = username;
    user.password = hashpassword;
    
    
    res.send("User registered.")
}
