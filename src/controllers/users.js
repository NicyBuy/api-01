'use strict'

const Product = require('../models/product');
const User = require('../models/user');
const Matest = require('../models/matest');
const fs = require('fs');
const jwt = require('jsonwebtoken');



var controller = {
    
    register: async function (req, res, next) {
        const usuario = req.body;
        const user = await User.findOne({'username': usuario.username});
        if(user){
            res.status(200).send({message: 'username ya utilizado', valid: false});
            return false;
        }
        //-----------------------------------------
        const newuser = new User({
            username: usuario.username,
            password: usuario.password 
        });
        newuser.password = await newuser.encryptPas(newuser.password);
        console.log(newuser);
        await newuser.save();

        const token = jwt.sign({id: newuser._id}, process.env.SECRET, {
            expiresIn: 60*60*24
        });
        res.json({message: 'ok got it, ya se guardo', auth: true, token});
    },

    toregister: function (req, res) {
        res.render('register', {title: 'register'});
    },
    
    tosigin: function (req, res) {
        res.render('sigin', {title: 'signin'});
    },

    sigin: async function (req, res) {
        const entrante = req.body;
        //res.status(200).send({message: 'entrando en calor', nombre: entrante.username});
        const user = await User.findOne({'username': entrante.username});
        if(!user){
            res.status(200).send({message: 'datos no validos', valid: false});
            return false;
        } else{
            const pasval = await user.validPas(entrante.password)
            if(pasval == false){
                res.status(200).send({message: 'contra incorrecta', valid:false});
                return false;
            }
            const token = jwt.sign({id: user._id}, process.env.SECRET, {
                expiresIn: 60*60*24
            });
            //res.json({message: 'alright, entra', auth: true, token});
            res.header('Access-Control-Allow-Origin', '*')
            res.status(200).send({message: 'entrado', valid:true, token:token});
        }
    },

    verytok: async function (req, res) {
        const tover = req.body;
        //res.status(200).send({message: 'si funciona el verytok', pasado: tover.token});
        const respuesta = await jwt.verify(tover.token, process.env.SECRET, function (err, decoded) {
            if(err) return res.status(200).send({auth:false, message:err});
            return decoded;
            //res.status(200).send({decoded: decoded});
            //console.log(decode);
            //next();           
        });
        
        const user = await User.findById(respuesta.id);
        if(!user){
            res.status(200).send({message: 'no se reconoce el usuario', auth: false});
        } else {
            res.status(200).send({message: 'usuario verificado', auth: true});
        }
        
        
    },

    disablePage: function (req, res) {
        res.render('disablepage', {title: 'signin'});
    }
}

module.exports = controller;