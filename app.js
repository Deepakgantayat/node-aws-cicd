const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.json({
        message: 'Hello There Running Smoothly! -Checking for runner state'
    })
})

app.listen(3000)
