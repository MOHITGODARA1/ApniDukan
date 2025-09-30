import mongoose from "mongoose"
import { DbName } from "../constant.js"


const ConnectDb=async ()=>{
  try {
    const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DbName}`)
    console.log(connectioninstance.connection.host)
  } catch (error) {
    console.log("error aa gaya",error)
    process.exit(1)
  }
}

export {ConnectDb}