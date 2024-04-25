const express = require('express')
const cors=require('cors')
require('dotenv').config()
const port =process.env.PORT|| 3000
const app=express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


//middlewire
app.use(cors())
app.use(express.json())

   

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.4mwwnz0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const uri=`mongodb://localhost:27017`


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
 const database=client.db('UserDataBase').collection('user')
 const productDataBase=client.db('UserDataBase').collection('product')

//get-operation
app.get('/product',async(req,res)=>{
    const data= productDataBase.find()
    const result=await data.toArray()
    res.send(result)
})
app.get('/product/:email',async(req,res)=>{
    console.log(req.params.email);
    const result = await productDataBase.find({email:req.params.email}).toArray()
    res.send(result)
})
app.get('/singleProduct/:id',async(req,res)=>{
  const result=await productDataBase.findOne({_id:new ObjectId(req.params.id) })
  res.send(result)
})

//PUT_Update operation

app.put('/updateProduct/:id',async(req,res)=>{
  console.log(req.params.id);
  const query={_id:new ObjectId(req.params.id)}
  const data={$set:{
    name:req.body.name,
    area:req.body.area,
    village:req.body.village,
    image:req.body.image,
  }}
  const update=await productDataBase.updateOne(query,data)
  console.log(update);
  res.send(update)
})




//DELETE Operation
app.delete('/delete/:id',async(req,res)=>{
  const query={_id:new ObjectId(req.params.id)}
  const result=await productDataBase.deleteOne(query)
  res.send(result)
})

//post operation

app.post('/user',async (req,res)=>{
    const newUser=req.body;
    console.log(newUser);
    const result=await database.insertOne(newUser)
    res.send(result)

})
app.post('/product',async(req,res)=>{
    const addProduct=req.body;
    console.log(addProduct);
    const result=await productDataBase.insertOne(addProduct)
    res.send(result)
})

 app.get('/',async(req,res)=>{
    res.send('data coming')
 })

    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server running in ${port}`)
})