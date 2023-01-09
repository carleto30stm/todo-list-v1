//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const date = require(__dirname+"/date.js");


// variables 
const items = [];
let workItems = [];
let year = date.year();



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended:true}));


app.use(express.static('public'));

// get
app.get('/', (req, res) => {

  let today = date.getDate();

  res.render('list', {listTitle: today, newList: items, year:year});
});


// post 
app.post('/', function (req, res) {
  console.log(year);
  console.log(req.body);
  const item = req.body.newItem;

  if(req.body.list === 'Work'){
    workItems.push(item);
    res.redirect('/Work');
    return;
  }else{
    items.push(item);
    res.redirect('/');

  }

});
app.get('/work',(req,res) =>{
  res.render('list',{listTitle: 'Work List', newList:workItems, year: year});
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
