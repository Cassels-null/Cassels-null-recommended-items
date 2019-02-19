const sqlite = require('sqlite3').verbose();
const path = require('path');
var db = require('../db/index.js');

function fetchItems(cb){
    var search = (Math.random()*400);
    if(search > 340){search = 340}
    var output = [];
    var querry = ('SELECT * FROM merch WHERE id > '+search
    +' AND id < '+(search+60))
    db.each(querry, (err, row)=>{
        if(err){
            console.log('ERROR after querry: '+err);
        } else{
            output.push(row);
        }
    }, ()=>{cb(output)});
}

module.exports.fetchItems = fetchItems;