let express=require('express');
let app=express();
let hrroutes=require('./routes/hr_routes');
let emproutes=require('./routes/emp_routes');
let mongoose=require('mongoose');
//indicating server incomming json format data

app.use(express.json());




mongoose.connect("mongodb://localhost:27017/hrmanagement").then(
    ()=>{console.log("db connect success")}).catch((err)=>console.log(err));


app.use("/api/hr",hrroutes);
//localhost:3000/api/hr/viewemployees
app.use("/api/emp",emproutes); 

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})