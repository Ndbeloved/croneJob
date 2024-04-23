import mongoose from "mongoose"

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        immutable: true,
    },
    plan: {
        type: String,
        default: 'basic',
    },
    amount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

Schema.pre("save", async function(next){
    try{
        const currentDate = new Date()
        const day = currentDate.getDay()
        this.day = day
    }
    catch(error){
        console.log('schema error: ', error)
        next(error)
    }
})

const User = mongoose.model('users', Schema)
export {User}