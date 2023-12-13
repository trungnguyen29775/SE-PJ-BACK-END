const express  = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')



const port = 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(port,()=>
{
    console.log("Listen on port ",port)
});


