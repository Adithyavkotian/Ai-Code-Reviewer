require('dotenv').config();
const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies


app.use('/ai', aiRoutes);
app.use('/', (req, res) => {
    res.send('');
});
module.exports = app;