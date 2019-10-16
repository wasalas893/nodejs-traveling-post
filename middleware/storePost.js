
module.exports=(req,res, next)=>{

    if( !req.body.username || !req.body.title || !req.body.Subtitle ||
         !req.body.content || !req.files.image  ){

        return res.redirect('/posts/new')
    }
   
    next()
}
