//Dependencias
const express = require('express');
const app = express();
require('dotenv').config()


//database
require('./database/db')


//Environment variables
const port = process.env.PORT || 3001

//modules
const routerApi = require('./routes')
const { logError, errorHandler  }= require('./middlewares/errorsCatch')

//settings
app.use(express.static("public"))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('homw')
})
//router
routerApi(app);

//middlewares
app.use(logError);
app.use(errorHandler);


app.listen(port,()=> {console.log(`Running API port ${port}`)})
