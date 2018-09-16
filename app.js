const express = require('express');
const app = express();
const cors = require('cors');
const mongoose   = require('mongoose');

const productRoute = require('./routes/productRoute');
const userRoute = require('./routes');
const categoryRoute = require('./routes/categoryRoute');

require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products',productRoute);
app.use('/',userRoute);
app.use('/categories',categoryRoute);

//Mongoose
const url = `mongodb://${process.env.USER_MLAB}:${process.env.PASSWORD}@ds221258.mlab.com:21258/ecommerce`;
mongoose.connect(url,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected');
});

app.listen(port,()=>{
  console.log(`application is on port:${port}`);
});



