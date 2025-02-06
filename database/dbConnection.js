const mongoose= require('mongoose' )

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(()=>{
          console.log("MongoDB atlas connected successsfully with pf server");
          
}).catch((err)=>{
          console.log("MongoDB atlas connection failed");
          console.log(err);
          
          
})