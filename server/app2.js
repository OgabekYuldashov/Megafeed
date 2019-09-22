// app.js

// 1. DEPENDENCIES
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');


// 2. INITIALIZATION
const app = express();

const jsonParser = express.json();

const logPath = fs.createWriteStream(path.join(__dirname + '/logs/access.log'), {flags: 'a'});


// 3. CONFIGURATION
const port = 9090;

app.set('env', 'development');

app.disable('x-powered-by');

app.set('trust proxy', true);


// 4. MIDDLEWARE
app.use(morgan('dev', {stream: logPath}));

app.use(compression());

app.use(jsonParser);

app.use(cors());


// 5. ROUTING
app.use('/api', require('./routes/versionRoute.js'));


// 6. ERROR HANDLING


// 7. BOOTUP
app.listen(port, function(){
    console.log('Application is listening to Port: %s', port);
});
