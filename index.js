const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const {uri} = require('./config/config');
const route = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connected to Db");
}).catch((err) => {
    console.log(err);
})

app.use('/', route)

app.listen(3005, ()=>{
    console.log("app listening");
})