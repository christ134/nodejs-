const express =require('express');
var app=express();



app.get('/', (req, res) => {
res.send('hello');   
});


app.get('/home',(req,res)=>{
res.send('welcome to my homepage');
});
app.get('/contacts',(req,res)=>{
    res.send('my contacts')
})

app.listen(3000);
