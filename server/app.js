const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const cors = require('cors');

const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');


// 2. INITIALIZATION
const app = express();
const logPath = fs.createWriteStream(path.join(__dirname + '/logs/access.log'), { flags: 'a' });


// 3. CONFIGURATION
const port = 9090;

app.set('env', 'development');
app.disable('x-powered-by');
app.set('trust proxy', true);
app.use((req, res, next) => {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(config.dburl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function (err) {
        if (err) throw err;
        next();
    });
});

// 4. MIDDLEWARE
app.use(morgan('dev', { stream: logPath }));
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/versionRoute'));



app.listen(port, () => console.log('Blog server running on port 9090!'));
