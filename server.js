import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";



const app = express();
const PORT = 8080;

app.use (express.json());

app.use(cors());

app.use("/api", chatRoutes);


app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  conectDB();

  
});
const conectDB = async()=>{
  try {
   await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with database");
    
  } catch(err){
    console.log("failed to connect with Db",err);
    
  }
}
console.log(process.env.MONGODB_URI);



// app.post("/test", async (req, res) => {
//   const options = {
//     method: "POST",
//     headers:{
//        "Content-Type": "application/json",
//     },
//     body:JSON.stringify({
//       model:"gemini-1.5-flash",
//       message: {
//         role:"user",
//         "content":req.body.message
//       }
    

//     })

//   }

//   try {
//    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent")
//    const data = await response.json();
//    console.log(data);
//    res.send(data);

   


//   } catch(err) {
//     console.log(err);
    
//   }

// });

