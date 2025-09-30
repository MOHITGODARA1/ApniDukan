import dotenv from "dotenv"
dotenv.config()
import { app } from "./app.js"
import { ConnectDb } from "./db/DBconnect.js"



ConnectDb().then(()=>{
  const PORT=process.env.PORT||3000
  app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
  })
  app.on("err",(err)=>{
    console.error(err);
    throw err
  })
}
).catch((err)=>{
  console.log("Connection failed!!!",err)
})



