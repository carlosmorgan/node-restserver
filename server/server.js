require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//parse aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application/json
app.use(bodyParser.json())

 
app.get('/usuario', function (req, res) {
  res.json('get usario')
})
 

app.post('/usuario', function (req, res) {

    let body = req.body
    res.json({
        persona: body
    })
  })
 
  
app.put('/usuario', function (req, res) {
    res.json('put usuario')
  })

app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
  })

app.listen(process.env.PORT, ()=>{
    console.log('escuchando puerto',3000)
})