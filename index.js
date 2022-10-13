const express = require('express');
const app = express();

//by default live sever works on port 80
const port = 8000;

app.listen(port, function (err){
    if (err)
    {
        console.error(`Error in running the server at ${port}:  ${err}`);
       
    }
    console.log(`Port ${port} is working fine!!`);
})