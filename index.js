const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

var router = express.Router();

var port = process.env.PORT || 3000;

function startApp() {
    let app = express();
    app.use(morgan('tiny'));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

	console.log('Setting up routes...');
    app.use("/api/v1/login", require("./routes/api/v1/login"));
    app.use("/api/v1/machine", require("./routes/api/v1/machine"));
    app.use("/api/v1/power_consumption", require("./routes/api/v1/power_consumption"));
    app.use("/api/v1/stored_procedures", require("./routes/api/v1/stored_procedures"));
    
    console.log('Setting public content...');
    app.use(express.static('public'));
    app.get('/', function (req, res) {
		res.redirect('/main.html');
	});
    console.log('Start listening on port:'+port+', interface:any');
    app.listen(port, '0.0.0.0');
}

(async() => {
	console.log('Setting up model...');
	const model = require('./model');
})()

startApp();
