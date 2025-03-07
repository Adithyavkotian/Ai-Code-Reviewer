require('dotenv').config();
const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors=require('cors')


const app = express();


app.use(cors())
app.use(express.json()); // Middleware to parse JSON bodies


app.use('/ai', aiRoutes);
app.use('/', (req, res) => {
    res.send('');
});
module.exports = app;