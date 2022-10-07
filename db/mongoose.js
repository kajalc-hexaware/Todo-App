const mongoose=require('mongoose')

const dbUrl=
"mongodb+srv://kajalc-hexaware:Mongodb1234@cluster0.dcsorbi.mongodb.net/TodoDB?retryWrites=true&w=majority"

const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(dbUrl,connectionParams)
.then(()=>{
    console.log("Connected to the DB")
})
.catch((e)=>{
    console.log("Error:",e)
})