// Modules Come From NPM
const express = require('express')
const rootPath = require('app-root-path')

//* An Instance Of Express
const app = express()

//* Static Directory Set Up
app.use(express.static(rootPath.path + '/public'));

//* Setting Up The Render Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//* Routes
app.use('/' ,require('./routes/index'))

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})