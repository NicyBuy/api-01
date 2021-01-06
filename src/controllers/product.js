'use strict'

var Product = require('../models/product');
var fs = require('fs');

var controller = {
    home: function (req, res) {
        return res.status(200).send('fuck the hello world');

        //return res.status(200).send('fuck the free world');
    },
    def: function(req, res){
        return res.status(200).send('working bitches yeah');
    },

    createProduct: function (req, res) {
        Product.create({
            title: 'nada1',
            description: 'nada2',
            precio: 23.23 
        });
        res.send("se termino de crear");

    },

    getProducts: async function (req, res) {
        const result = await Product.find();
        res.json(result);
    },

    oneProduct: function (req, res) {
        var productId = req.params.id;
        Product.findById(productId, (err, product) => {
            if (err) return res.status(500).send({
                meesage: "error al devolver el producto"
            });
            if (!product) return res.status(404).send({
                message: "el producto no existe"
            });
            return res.status(200).send({
                product
            });
        });
    }






    //PARA PROBAR LA CONECCION
    /* return res.status(200).send({
        project: project,
        meesage: "metodo saveProject working"
    }); */
}

module.exports = controller;
