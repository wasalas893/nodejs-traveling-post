const bcrypt=require('bcrypt')

const User=require('../database/models/User')


module.exports=(req,res)=>{

    const {email,password}=req.body;

    //try to find user

    User.findOne({email},(error,user)=>{
       if(user){

        //compare passworld

        bcrypt.compare(password,user.password,(error,same)=>{

            if(same){
          
                res.redirect('/')
            }else{
                res.redirect('/auth/login')
            }
        })

       }else{
           return res.redirect('/auth/login')
       }

    })

}