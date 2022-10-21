const express = require('express');
const app = express();

//by default live sever works on port 80
const port = 8000;
//use express router
app.use('/', require('./routes/index'));

//seting up ejs as the view engine
app.set('view engine', 'ejs');

//setting up views folder
app.set('views', './views');




app.listen(port, function (err){
    if (err)
    {
        console.error(`Error in running the server at ${port}:  ${err}`);
       
    }
    console.log(`Port ${port} is working fine!!`);
})