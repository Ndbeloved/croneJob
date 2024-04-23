import { UserClass } from "../services/UserClass.js"

const createUser = async(req, res)=>{
    try{
        const {name} = req.body 
        const userInstance = new UserClass()
        const saved = await userInstance.create(name)
        res.status(200).json({message: "user saved successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Server error during user save"})
    }
}

export {createUser}