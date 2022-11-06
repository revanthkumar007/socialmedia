import  express  from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
const CONNECTION_URL = 'mongodb://kumar:12345@cluster0-shard-00-00.rbcjq.mongodb.net:27017,cluster0-shard-00-01.rbcjq.mongodb.net:27017,cluster0-shard-00-02.rbcjq.mongodb.net:27017/?ssl=true&replicaSet=atlas-fqmtqp-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;


const app = express();
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/',(req,res)=>{
  res.json('hi pexlesl')
})
app.use('/posts', postRoutes);   
app.use("/user", userRouter);

mongoose
    .connect(CONNECTION_URL)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log('server is running ',PORT);
        })
    })
    .catch((error)=>console.log(error, 'did not connect')) 



  
