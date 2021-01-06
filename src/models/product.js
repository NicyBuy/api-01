const {Schema, model} =require('mongoose');

const ProductScheman = new Schema({
    title: String,
    description: String,
    precio: Number
});

module.exports = model('Test', ProductScheman);