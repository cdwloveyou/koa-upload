const http = require('http');

const dbClient = require('mongodb').MongoClient;

http.createServer((req,res)=>{
    dbClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(err,db)=>{
        if(err) throw err;
        const dbo  = db.db('test');
        const whereStr = {"name":'cdw'};
        let data =  dbo.collection("col").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log('data' + result);
            res.writeHead(200,{"Content-type":"text/blain"});
            res.write(JSON.stringify(result));
            res.end();
            db.close();
        });
    })

    
}).listen(8081);

console.log('listen to 8080');