const express=require("express")
const router = require ('express').Router();
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});
// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});
var params = {
  DryRun: false
};
router.get('/',async(req,res)=>{
    try {
        // Call EC2 to retrieve policy for selected bucket
        await ec2.describeInstances(params, function(err, data) {
        if (err) {
         console.log("Error", err.stack);
    } else {
     res.status(200).json({data});
    // console.log('success',JSON.stringify(data));

    }
  });
    } catch (error) {
        console.log(error)
    }
})
module.exports=router