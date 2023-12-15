const express  = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 5000
const db = require("./models");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// db.sequelize.sync({alter:true})


app.listen(port,()=>
{
    console.log("Listen on port ",port)
});


