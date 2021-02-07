const express = require('express')
const analyzeText = require('./textAnalyser')

const app = express()
app.use(express.json())

app.post('/analyse',(req,res,next) => {
  const body = req.body
  if(!body ||  !body.text ){
    return res.status(400).json({
      error: 'Invalid request'
    })
  }
  res.json(analyzeText(body.text))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`)
})