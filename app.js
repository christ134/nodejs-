const express =require('express');
var app=express();



app.get('/', (req, res) => {
res.send('hello');   
});


app.get('/home',(req,res)=>{
res.send('welcome to my homepage');
});
app.get('/contacts',(req,res)=>{
    res.send('my contacts hello')
})


app.use(express.static('nodero'))
app.listen(3000);
