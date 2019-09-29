const express = require("express");
const app = express();
let mysql = require('mysql2');


const PORT = process.env.PORT || 80

// A function that sends a request to a server with a MySQL database and receives a response from the server
function next() {
  return new Promise((resolve, reject) => {
    
    const connected = mysql.createConnection({
      database: 'test_shop',
      host: 'db4free.net',
      user: 'vladimir73687',
      password: 'art7963s'
    }).promise();

    connected.query("SELECT * FROM test_shop.products_shop")
    .then(([rows, fields]) => {
      let datas = JSON.stringify(rows);
      if(datas) {
        resolve(datas);
      };
    })
    .catch(err => {
      console.log('Error!');
      reject(err)
    });

    connected.end((err) => {
      if (err) {
        return console.log("Error: " +  err.message);
      }
    console.log("Connection end...");
    }); 
  });
}
//Listens to the GET-request and sends a response
app.get('/api/request', (req, res) => {
  console.log('Request received');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
  res.contentType('application/json');
  
  let dateGreet = ``;
  next()
    .then(data => {dateGreet = data;
                   res.end(dateGreet)});
});


app.listen(PORT, () => {
  console.log('Server has been started...');
})
