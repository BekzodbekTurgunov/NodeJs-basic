const express = require('express');
//const router = express.Router()
const app = express()
const routers = require('./router/index');

app.use('/', routers)



const port = process.env.PORT || 4004
app.listen(port, ()=>{
    console.log(`Server listen on ${port}`);
})