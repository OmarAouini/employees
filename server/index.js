const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require("compression");
const { sqlConnection } = require('./config/database')
require ('dotenv/config')

//environment variables
const port = process.env.PORT

// middlewares
app.use(cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"]}))
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(compression());

//routes
app.get('/', (req, res) => res.send('Hello World!'))

//404 handler
app.get('*', function (req, res) {
    res.status(404);
    res.render("./error")
  });

//db connection
sqlConnection()

//server start
app.listen(port, () => console.log(`employees app listening on port ${port}!`))
