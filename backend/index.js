let express = require('express');
let app = express();
let {connection} = require('./db/dbconnector');

app.listen(3000, () => {
    connection.connect((err) => {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
       
        console.log('connected as id ' + connection.threadId);
      });
});