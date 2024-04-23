import { User } from "../model/UserModel.js"

class UserClass{

    async create(name, plan){
        try{
            const plans = plan || 'basic'
            const newUser = new User({
                name: name,
                plan: plans,
            })
    
            await newUser.save()
        }catch(err){
            throw new Error("Error trying to save user: ",err)
        }
    }

    async getAll(){

    }

    async get(id){
        
    }

    async delete(id){

    }

}

export {UserClass}