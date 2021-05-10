'use strict'

var mongo = require('mongodb');

var url = 'mongodb://localhost/EmployeeDB';

mongo.MongoClient.connect(url, ( err, db) => {
    console.log('Connected');

    var cursor = db.collection('Employee').find();

    cursor.each((err, doc) => {
        console.log(doc);
    })
        db.close();
})