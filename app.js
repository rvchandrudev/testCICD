const express = require('express')
const app = express()



app.get("/test", (req,res) => {
    return res.send("Hello world")
})


module.exports = app;