const express=require('express')
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var {Employee}=require('../models/employee');

router.get('/',(req,resp)=>{
    Employee.find((err,docs)=>{
        if(!err){resp.send(docs)}
        else{console.log("Error in Retriving employee: "+JSON.stringify(err,undefined,2))}
    })
})

router.get('/:id',(req,resp)=>{
    if (!ObjectId.isValid(req.params.id))
    return resp.status(400).send(`no record with given id: ${req.params.id}`);

    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){resp.send(doc)}
        else{console.log("Error in Retriving employee: "+JSON.stringify(err,undefined,2))}
    });
})

router.post('/',(req,resp)=>{
    var emp=new Employee({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        empid:req.body.empid,
        city:req.body.city,
        contact:req.body.contact,
        email:req.body.email,
        designation:req.body.designation,
        salary:req.body.salary,
        jndate:req.body.jndate,
        state:req.body.state,
        dob:req.body.dob
    });
    emp.save((err,docs)=>{
        if(!err){console.log("Data Added") + resp.send.docs}
        else {console.log("Error in Employee Save")+JSON.stringify(err,undefined)}
    })
})

router.put('/:id',(req,resp)=>{
    if (!ObjectId.isValid(req.params.id))
    return resp.status(400).send(`no record with given id: ${req.params.id}`);

    // var emp=new Employee({
    //     firstname:req.body.firstname,
    //     lastname:req.body.lastname,
    //     empid:req.body.empid,
    //     city:req.body.city,
    //     contact:req.body.contact,
    //     email:req.body.email,
    //     designation:req.body.designation,
    //     salary:req.body.salary,
    //     jndate:req.body.jndate
    // });

    Employee.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,docs)=>{
        if(!err){console.log("Data Updated") + resp.send.docs}
        else{console.log("Error in employee update:  "+JSON.stringify(err,undefined,2))}

    });
})

router.post('/:id',(req,resp)=>{
    var emp=new Employee({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        empid:req.body.empid,
        city:req.body.city,
        contact:req.body.contact,
        email:req.body.email,
        designation:req.body.designation,
        salary:req.body.salary,
        jndate:req.body.jndate,
        state:req.body.state,
        dob:req.body.dob
    });
    emp.save((err,docs)=>{
        if(!err){console.log("Data shipted") + resp.send.docs}
        else {console.log("Error in Employee data")+JSON.stringify(err,undefined)}
    })
})

router.delete('/:id',(req,resp)=>{
    if (!ObjectId.isValid(req.params.id))
    return resp.status(400).send(`no record with given id: ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){resp.send(doc)}
        else{console.log("Error in employee delete:  "+JSON.stringify(err,undefined,2))}

    })
})


module.exports=router;