const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password : {
        type : String
    },
    boughtProducts : [{
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Product'
    }]
},{
    timestamps: true
});

userSchema.pre('save', function(next) {
  if(this.password){
      let salt = bcrypt.genSaltSync(10);
      this.password  = bcrypt.hashSync(this.password, salt);
  }
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;