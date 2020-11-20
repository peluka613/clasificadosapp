let express = require('express');
let app = express();
let {connection} = require('./db/dbconnector');
let {router} = require('./routes/routes');
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization')
  next()
})
app.use('/api', router);

app.listen(4001, () => {
    connection.connect((err) => {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
       
        console.log('connected as id ' + connection.threadId);
      });

});
