const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-uujt2.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uplods')));
app.use(routes);

app.listen(3333);
