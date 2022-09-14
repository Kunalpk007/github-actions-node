const express = require('express');
const app = express();

app.get('/test',(_req,res) =>{
    res.status(200).send("Success");
});
app.get('/',(_req,res) =>{
    res.status(200).send("Get success");
});

module.exports = app;