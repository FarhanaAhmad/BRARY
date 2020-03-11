const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect ('mongodb+srv://farhana:leb729707@cluster0-af6km.mongodb.net/test?retryWrites=true&w=majority', 
    { useNewUrlParser: true,
       useUnifiedTopology: true
    }, 
     (error, client) => {
      if(error) {
       return console.log('error connecting to mongodb');
      }
      else{
        _db = client.db();
        callback();
      }
      
     });
    };

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';

};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
