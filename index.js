//steps to define express server
//Load .env file contents in to process.env

require('dotenv').config() //imports .env file and give it in to process.env
const express = require('express') //importing express
const cors = require('cors')     //importing cors

const pfserver= express()  //creating express server

pfserver.use(cors()) //using cors
pfserver.use(express.json())  //using express.json()

const PORT= 3000 || process.env.PORT //setting port for run

pfserver.listen(PORT,()=>{     //listen section
          console.log(`My pfserver is ruuning in port: ${PORT} and waiting for client request!!!`);
})

pfserver.get('/',(req,res)=>{  //req means request, res means result 
          res.status(200).send('<h1 style="color:red;">My pfserver is ruuning in port and waiting for client request!!!</h1>')
})

pfserver.post('/',(req,res)=>{
          res.status(200).send("POST request")
})
