    const express =require('express');
    var app=express();
    const hbars=require('express-handlebars');
    app.engine('handlebars',hbars({defaultLayout:"mainpage"}));
    app.set('view engine','handlebars');
    app.use(express.static('views/static'));
    app.use(express.urlencoded());

app.post('/getdata',(req,res)=>{
   var name=req.body.getemail;
   var adress=req.body.gepass;
   res.send(name);
});
app.get('/', (req, res) => {
res.render('index');   
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

app.listen(3000);
