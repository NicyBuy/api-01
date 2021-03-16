'use strict'

const Store = require('../models/store');
const fs = require('fs');



var controller = {

    saveStore: function(req, res){
        let newStore = new Store();
        newStore.save((err, storeStored) => {
            if(err) return res.status(500).send({meesage: "hubo un error guardando macho"});

            if(!storeStored) return res.status(404).send({message: "no se pudo guardar weon"});

            return res.status(200).send({store: storeStored, message: "guardado correctamente"});
        });
    },
   
}

module.exports = controller;
