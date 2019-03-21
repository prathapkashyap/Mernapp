const Mern=require('../models/model1');

module.exports=function(app){
    
    app.get('/api/responses',function(req,res){

        var responses=Mern.find({}).sort({_id:-1}).limit(1).then(function(resp){
            console.log(resp);
            res.json(resp);
        })
        
    

    })
   
   

}


