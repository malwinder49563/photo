var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
country_code: {
		type: String,
		default:""
    },
    client_name: {
        type: String,
        default:""
    },
    client_phone_no: {
        type: String,
        maxlength: 15
    },
    client_email: {
        type: String,	
		sparse: true,
		unique:true,
        maxlength: 255
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: Date.now
    },
    is_deleted:{
        type: Boolean,
        default: 1
    },
    token:{
        type: String,
        maxlength: 225
    },
    profile_image:{
        type:String
    },
    photograph_id:{
        type:String
    }
},
{
   versionKey: false // You should be aware of the outcome after set to false
});
clientSchema.plugin(uniqueValidator,{ message: '{PATH} is to be unique.' });
var client = mongoose.model('client', clientSchema);
module.exports = client;