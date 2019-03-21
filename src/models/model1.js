const mongoose=require('mongoose');
mongoose.connect('mongodb://test:test123@ds121176.mlab.com:21176/mernapp',(res)=>{
    console.log('connected',res)
});


const Schema=mongoose.Schema;

var mernSchema=new Schema({

    section1:{
        ans:String
    },
    section2:{
        ans:String,
        radio_btn:String
    },
    section3:{
        concern_name:String,
        end_year:String,
         people_involved:String,
         people_assigned:String
    },
    section4:{
        stuatuary_compliances:String,
    pan_no:String,
    working_process:String,
    address:String,
    bank_accounts:String,
    checkbox:String,
    radiobtn_ans:String
        

    },
    section5:{
        ans:String,
        one:String,
        two:String,
        three:String,

    },
    section6:{
        ans:String,
        question1:String,
        question2:String
        ,
        question3:String
    },
    section7:{
        registration_no:String,
        itret:String,
        gstret:String,
        chk_chalan:String,
        gst_reg_let:String,
        est_reg_let:String,
        vat_reg_let:String,
        pf_reg_let:String,
        roc_reg_let:String,
        stax_reg_let:String

    },
    section8:{
        receipt:String,
        question1:String,
        question2:String,
        question3:String,
        question4:String,
    },
    section9:{
        share_capital:String,
        question1:String,
        question2:String,
        question3:String,
        question4:String,
        question5:String,
        question6:String,
        question7:String,
        question8:String,
        question9:String,
        },
    section10:{
        share_capital:String,
        question1:String,
        question2:String,
        question3:String,
        question4:String,
        question5:String,
        question6:String

    },
    section11:{
        question1:String,
        question2:String,
        question3:String,
        question4:String,
        question5:String,
        question6:String,
        question7:String,
        question8:String,
        unsecured_loans:String

    },
    section12:{
        question1:String,
        question2:String,
        cur_liabi:String,
        q3:String
    },
    section13:{
        stock:String,
        question1:String,
        question2:String,
        question3:String,
    },
    section14:{
        question1:String,
        question2:String,
        question3:String,
        question4:String,
        question5:String,
        creditors:String

    },
    section15:{
        question1:String,
        question2:String,
        question3:String,
        question4:String,
        question5:String,
        question6:String,
        question7:String,
        question8:String,
        question9:String,
        Question10:String,
        dues_orders:String


    },
    section16:{
        question1:String,
        question2:String,
        question3:String,
        question4:String,
        question5:String,
        provision:String

    },
    section17:{
        question1:String,
        question2:String,
        question3:String,
        bank_confirmation:String

    },
});

var Mern=mongoose.model('Mern',mernSchema);

Mern.find({}).then((res)=>{
    console.log(res)
})
module.exports=Mern;