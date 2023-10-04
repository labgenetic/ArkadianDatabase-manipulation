const express = require("express");
const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = process.env.URI

const pass = process.env.DATABASE_PASS

const client = new MongoClient(uri);

const app = express();

const PORT = 5600;

const cors = (req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Metods', 'GET');

  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();


}

app.use(cors);


async function main() {
      await client.connect();
      console.log("Connected successfully !");
  
      const db = client.db("arkx");
  
      const arkadians = db.collection("arkadians");
      
      const data = await arkadians.find().toArray();

      app.get("/arkx", (req, res) => {
        res.json(data);
      });
    
      client.close();
  }
  
  main();

  app.listen(PORT, () => console.log("Port Listening"))