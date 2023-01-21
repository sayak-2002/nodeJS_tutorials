// import
const express  = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const colors = require('colors');


// rest obj
const app = express();

//middlewares
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))

//rest / route / endpoint
app.get('/', (req, res) => {
    res.send("<h1>Welcome to express js</h1>");
});

// post method
app.post('/contact-form', (req, res) => {
    const { inputData } = req.body;
    res.json({
        success:true,
        message:`welcome to ${inputData}`,
    });
}); 

// port number
const PORT = 5000

//listener
app.listen(5000, () => {
    console.log(`Server Running on ${PORT}`.bgCyan)
});