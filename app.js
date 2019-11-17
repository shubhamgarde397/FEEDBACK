//npm install cors
//npm install mongo
//npm install node
//npm install express

var exec = require('child_process').execFile;

var common_data = require('./SERVER/data.json');
var express = require(common_data.required.express);
var app = express();
app.use(express.static(__dirname));
var cors = require(common_data.required.cors)
app.use(cors());
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ encoded: false, extended: true })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var apiCalls = common_data.APICALLS;

var mongoFunctions = require('./SERVER/mongoFunctions');
var userArray = [];

app.post('/test', urlencodedParser, function (req, res) {
    userArray.push(req.body.user)
    res.send(userArray);
});

app.post('/gettest', function (req, res) {
    console.log(JSON.stringify(userArray));
    res.send(userArray);
});

app.listen(3000, function () {
    console.log(common_data.Messages.serverStartMsg);
});