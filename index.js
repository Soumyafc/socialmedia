const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const TodoList = require('./models/todo');

//by default live sever works on port 80
const port = 8000;
//use express router
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use(bodyParser.urlencoded({ extended: false }));

//seting up ejs as the view engine
app.set('view engine', 'ejs');

//setting up views folder
app.set('views', './views');

app.use(express.static('assets'));

app.post('/create-list', function (req, res) {
   // res.redirect('/');
    // console.log(req.body);
    // res.redirect('/');
    TodoList.create({
        desc: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function (err, newTodo) {
        if (err)
        {
            console.error("error in creating a new todo")
            return;
        }
        console.log('*********', newTodo);
        return res.redirect('back');

    });
})


app.listen(port, function (err){
    if (err)
    {
        console.error(`Error in running the server at ${port}:  ${err}`);
       
    }
    console.log(`Port ${port} is working fine!!`);
})