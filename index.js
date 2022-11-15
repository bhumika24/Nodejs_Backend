const express=require('express');
const router = require ('express').Router();
const cors=require('cors')

const app=express();
const aws= require('./ec2_describeinstances');

app.use(express.json());
app.use(cors());
app.get('/',aws)
app.listen(5000,()=>console.log("port is running 5000"))
