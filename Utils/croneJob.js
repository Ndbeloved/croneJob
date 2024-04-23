import cron from "node-cron"
import { User } from "../model/UserModel.js"
//0 0 * * * :daily
const Crone = ()=>{
    cron.schedule('0 0 * * *', async()=>{
        try{
            let balance
            let userModifier
            const dateObj = new Date()
            const day = dateObj.getDay()
            const users = await User.find({day: day})
            users.forEach(async(user)=>{
                switch(user.plan){
                    case 'basic':
                        balance = user.amount + 1000
                        //hoping to find a better way of doing this
                        userModifier = await User.findOneAndUpdate({_id: user._id}, {$set: {amount: balance}})
                        break
                    case 'silver':
                        balance = user.amount + 3000
                        userModifier = await User.findOneAndUpdate({_id: user._id}, {$set: {amount: balance}})
                        break
                    case 'gold':
                        balance = user.amount + 5000
                        userModifier = await User.findOneAndUpdate({_id: user._id}, {$set: {amount: balance}})
                        break
                    default:
                        balance = 0
                }
            })
        }
        catch(Err){
            console.log(Err);
        }
    })
}

export {Crone}