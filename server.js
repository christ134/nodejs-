    const express =require('express');
    var app=express();
    const hbars=require('express-handlebars');
    app.engine('handlebars',hbars({defaultLayout:"mainpage"}));
    app.set('view engine','handlebars');
    app.use(express.static('views/static'));
    app.use(express.urlencoded());

app.post('/register',(req,res)=>{
   var name=req.body.name;
   var password=req.body.getpass;
   var admno=req.body.admno;
   var email=req.body.getemail;
  
   res.send(name );
   res.send( admno );
   res.send( email);
   res.send( password );
   
});
app.get('/', (req, res) => {
res.render('index',{name:'chris'});   
});
app.get('/about',(req,res)=>{
res.render('about');   
});
app.get('/joinin',(req,res)=>{
res.render('joinin');   
});
app.get('/gallery',(req,res)=>{
res.render('gallery');   
});

app.post('/login',(req,res)=>{
    var user=req.body.username;
    var pass=req.body.password;
    if (user=="admin" && pass==1234)
        res.send('success');
    else
        res.send('failed')
});


app.listen(process.env.PORT || 3000,()=>{
    console.log('web application running succesfully')
});
