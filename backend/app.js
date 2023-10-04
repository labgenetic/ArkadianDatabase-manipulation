const {MongoClient} = require('mongodb');
require('dotenv').config();

const secret = process.env.DATABASE_PASS;
// setting our requirement to connect to the database
const uri = `mongodb+srv://admin:${secret}@testdb.3qrnttg.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri)

const myself = {
    name : 'Charaf',
    age  :  21,
    co   :  'Freelance',
    skill: ['HTML','CSS','Javascript','mongoDb','Docker','tailwind','nodejs','express']
};


const main = async()=>{
        await client.connect()
         console.log("Connected correctly to server")
        const db = client.db("arkx");
        const collection = db.collection("Charaf");
        const createObject =(Obj)=> collection.insertOne(Obj)
        //this function creates objects within the selected collection above        
        try{
            createObject(myself)
        }
        catch (error){
            console.error('oops error happened',error);
        }
        finally{
            console.info('Inserted self Successfully');
        }
}


//          under developement!! do not Touch

// showCollections = async()=>{
//     await client.connect()
//     console.log("Connected correctly to server")
//    const db = client.db("arkx");
//    const collections = await db.listCollections().toArray()
// //    collections.forEach((element,index) => {
// //     console.log(`this is the collection number ${index + 1}, its name is ${element.name}`)
// //    });

// }
// showCollections()