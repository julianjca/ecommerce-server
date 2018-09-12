const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const mongoose   = require('mongoose');

const productRoute = require('./routes/productRoute');
const userRoute = require('./routes');
const categoryRoute = require('./routes/categoryRoute');

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products',productRoute);
app.use('/',userRoute);
app.use('/categories',categoryRoute);

//Mongoose
const url = 'mongodb://localhost:27017/e-commerce';
mongoose.connect(url,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected');
});

app.listen(port,()=>{
  console.log(`application is on port:${port}`);
});



