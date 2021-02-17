const mongoose = require('mongoose');//mongoose schema for google oauth
const {Schema} = mongoose;

const userSchema = new Schema({googleID:String});

mongoose.model('users', userSchema);
