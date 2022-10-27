const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo_list_db');//connected to the data base

const db = mongoose.connection; // this gives the access to the data base

db.on('error', console.error.bind(console, 'error in connecting with the data base'));

db.once('open', function () {
    console.log('succesfully connected to the database');
});