'use strict';
//json web tocken
//to modify

const jwt = require("jsonwebtoken"); 
const express = require('express');
const keyJsonWT = "key123";

const jsonWebT = (req,res,next) =>{
    jwt.verify(req.body["token-Ok"],keyJsonWT),
    function(err,ok){
        if(err){
            res.json(`error, token necesario ${err}`)
        }else{
            console.log(`funcionando token ${ok}`);
            next();
        }
    } 
} 
module.exports=jsonWebT;