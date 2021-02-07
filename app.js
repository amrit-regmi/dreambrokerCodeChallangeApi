const express = require('express')
const analyzeText = require('./textAnalyser')

const app = express()
app.use(express.json())

app.post('/analyse',(req,res,next) => {
  const body = req.body
  if(!body || !('text' in body) ){
    return res.status(400).json({
      error: 'Invalid request'
    })
  }
  res.json(analyzeText(body.text))
})

module.exports = app