const bcrypt = require('bcrypt');
const User = require('../models/userM');

//signup route handler
exports.signup = async (req,res)=>{
    try{
        const {name,email,password,role} = req.body;
        //check user already exists or not
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"user email already exist",
            });
        }

        //secure password
        let hashPassword;
        try{
            hashPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            res.status(500).json({
                success:false,
                message:"error in hashing password",
            });
        }
        
        //create entry
        const user = await User.create({
            name,email,password:hashPassword,role
        })

        return res.status(200).json({
            success:true,
            message:"User created successfully",
        });  
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"error in creating user in db try again after sometime",
        });
    }
}