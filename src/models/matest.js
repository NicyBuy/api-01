const {Schema, model} =require('mongoose');

const TestScheman = new Schema({
    nombreTest: {default: "test de test", type: String, required:false}
});

module.exports = model('Matest', TestScheman);