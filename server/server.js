import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import Videos from "./models/dbModel.js";


//App Config
dotenv.config();
const app = express();
 

//Middleware
app.use(express.json());
app.use(cors());



//DB Configuration
const port = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server connect at Port: ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

//API Endpoint Configuration
app.post('/api/posts', (req, res) => {
  const dbVideos = req.body 
  Videos.create(dbVideos, (err, data) => {
    if(err){
      res.status(500).send(err);
    } 
    else{
      res.status(201).send(data);
    }
  })
});

app.get('/api/posts', (req, res) => {
  Videos.find((err, data) => {
    if(err){
      res.status(500).send(err)
    }else {
      res.status(200).send(data)
    }
  })
});

