const express=require('express');
const body=require('body-parser');
const axios=require('axios');
const Mern=require('../models/model1');
const responses=require('./responses')
var app=express()

app.use(body.json());
app.use(body.urlencoded({extended:false}));
app.get('/api',function(req,res){
    var data={
        one:'1',
        two:'three',
        five:'6'
    }
    res.json(data)
})

var answers=new Mern();


app.post('/api/section1',function(req,res){
    
    var data=req.body;
    answers.section1=data.section1;
    console.log(answers);
    // answers.save(function(err){
    //     if (err) throw err;
    //     else{
    //         console.log('saved to database');
    //     }
    // })
});

app.post('/api/section2',function(req,res){
    
    var data=req.body;
    answers.section2=data.section2;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/section3',function(req,res){
    
    var data=req.body;
    answers.section3=data.section3;
    console.log(answers);
    
    res.send('thanks for the data')
})
app.post('/api/section4',function(req,res){
    
    var data=req.body;
    answers.section4=data.section4;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/section5',function(req,res){
    
    var data=req.body;
    answers.section5=data.section5;
    console.log(answers);
    
    res.send('thanks for the data')
})
app.post('/api/section6',function(req,res){
    
    var data=req.body;
    answers.section6=data.section6;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/section7',function(req,res){
    
    var data=req.body;
    answers.section7=data.section7;
    console.log(answers);
    
    res.send('thanks for the data')
})
app.post('/api/section8',function(req,res){
    
    var data=req.body;
    answers.section8=data.section8;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/section9',function(req,res){
    
    var data=req.body;
    answers.section9=data.section9;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/section10',function(req,res){
    
    var data=req.body;
    answers.section10=data.section10;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/section11',function(req,res){
    
    var data=req.body;
    answers.section11=data.section11;
    console.log(answers);
    
    res.send('thanks for the data')
})
app.post('/api/section12',function(req,res){
    
    var data=req.body;
    answers.section12=data.section12;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/section13',function(req,res){
    
    var data=req.body;
    answers.section13=data.section13;
    console.log(answers);
    
    res.send('thanks for the data')
})
app.post('/api/section14',function(req,res){
    
    var data=req.body;
    answers.section14=data.section14;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/section15',function(req,res){
    
    var data=req.body;
    answers.section15=data.section15;
    console.log(answers);
    
    res.send('thanks for the data')
})
app.post('/api/section16',function(req,res){
    
    var data=req.body;
    answers.section16=data.section16;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/section17',function(req,res){
    
    var data=req.body;
    answers.section17=data.section17;
    console.log(answers);
    
    res.send('thanks for the data')
})

app.post('/api/save',function(req,res){
    
    answers.save().then(function(error){
        if (error) throw error
        else{
            console.log('this is working')
        }
    })
    console.log(answers);
    answers=new Mern()
    console.log(answers)

    
    res.send('thanks for the data')
})



responses(app);
app.listen(3001,console.log('listening to port 3001'));

