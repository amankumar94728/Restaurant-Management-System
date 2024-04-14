import mongoose from "mongoose";
const connect = (url)=>{
    mongoose.connect(url)
    .then(()=>console.log('connected to mongo'))
    .catch((err)=>console.error(err))
}
export default connect;

