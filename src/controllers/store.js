'use strict'

const Store = require('../models/store');
const fs = require('fs');


var controller = {

    saveStore: function (req, res) {
        let newStore = new Store();
        newStore.save((err, storeStored) => {
            if (err) return res.status(500).send({
                meesage: "hubo un error guardando macho"
            });

            if (!storeStored) return res.status(404).send({
                message: "no se pudo guardar weon"
            });

            return res.status(200).send({
                store: storeStored,
                message: "guardado correctamente"
            });
        });
    },

    addProduct: function (req, res) {
        let storeId = req.params.id;
        let newtitle = req.body.title
        let newprice = req.body.price
        Store.findOneAndUpdate(
            storeId, {
                $push: {
                    products:{
                        title: newtitle,
                        price: newprice,
                    }
                }
            },
            (err, storeUpdated) => {
                if (err) return res.status(500).send({
                    message: 'error al actualizar'
                });
                if (!storeUpdated) return res.status(404).send({
                    message: 'no se encontro para actualizar'
                });
                return res.status(200).send({
                    message: 'actualizado correctamente'
                })
            },
        );
    },

    updateStore: function (req, res) {
        let storeId = req.params.id;
        let update = req.body;
        
        Store.findByIdAndUpdate(storeId, update, (err, storeUpdated) => {
            if(err) return res.status(500).send({message: 'error al actualizar'});
            if(!storeUpdated) return res.status(404).send({message: 'no se encontro para actualizar'});
            return res.status(200).send({store: storeUpdated})
        });
    },

    getStoreInfo: async function (req, res) {
        const result = await Store.find();
        res.json(result);
        //return res.status(200).send({message: 'hodi'})
    },
}

module.exports = controller;