var express = require('express');
var app = express();
const driver = require('bigchaindb-driver')

const port = process.env.PORT || 3000;

let conn = new driver.Connection('https://test.bigchaindb.com/api/v1/', {
    app_id: 'edbd1767',
    app_key: '324661046cb0b6945cf264a92b79cce5'
})

app.use('/', express.static('site'));

app.get('/id/:id', function(req, res){
    conn.searchAssets(req.params.id)
    .then(assets => res.send(assets))
});

app.listen(port,()=>{
    console.log(`App Listening on ${port}`)
});