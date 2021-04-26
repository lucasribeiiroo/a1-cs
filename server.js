const express = require('express');
const connectDB = require('./database/Connection');
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use('/users', require('./Api/User'));




app.listen(3000);
