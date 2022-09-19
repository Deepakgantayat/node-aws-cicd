const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.json({
        message: 'Hello There Running Smoothly!'
    })
})

app.listen(3000)
