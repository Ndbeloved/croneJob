import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const Connect = (APP)=>{
    if(process.env.ENVIRONMENT == 'prod'){
        mongoose.connect(process.env.MONGO_URL_PROD)
            .then(()=>{
                console.log(`connected successfully to db`);
                const server = APP.listen(process.env.PORT, ()=>{
                    const {address, port} = server.address()
                    console.log(`app is running on https://${address}:${port}`);
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }
    else{
        mongoose.connect(process.env.MONGO_URL_TEST)
            .then(()=>{
                console.log(`connected successfully to db`);
                const server = APP.listen(process.env.PORT, ()=>{
                    const {address, port} = server.address()
                    console.log(`app is running on http://${address}:${port}`);
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }
}

export {Connect}