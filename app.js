const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// var item = "";
// for multiple items
var items = ["Start with optimism","Enjoy the day","Set Goals","Work towards your Career","Be happy"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true})); //for req.body.newItem
app.use(express.static("public"));

// app.get("/", function(req,res){
//writing logic code on server side & sending result to the browser
// var today = new Date();
// if(today.getDay() === 6 || today.getDay() === 0){
//   res.send("Yay! It's Weekend."); //U can add html tags
// }else{
//   res.send("Boo! It's a Working Day.");
// }

// var today = new Date();
// var currentDay = today.getDay();
// if(currentDay === 6 || currentDay === 0){
//   res.write("<h1>Yay! It's Weekend.</h1>"); //U can add html tags
// }else{
//   // res.write("<p>It is not the weekend.</p>");
//   // res.write("<h1>Boo! It's a Working Day.</h1>");//to send multiple things use res.write
//   // res.send();
//
//   //but strainous to write res.send many times to send multiple lines.So use sendFile
//   res.sendFile(__dirname + "/index.html");
//}
// });

//first EJS template
// app.get("/", function(req, res) {
//   var today = new Date();
//   var currentDay = today.getDay();
//   var day = "";
//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//
//     default:
//       console.log("Error: currentDay = " + currentDay);
//
//   }
//   res.render("list", {kindOfDay: day});
// });

//Formatting the date string using javaScript
app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {kindOfDay: day, newListItems: items}); //have to declare item at the top
});

app.post("/", function(req,res){
  // console.log(req.body.newItem); //but to use this req.body.newItem , we need body-parser
  //now to add the new item to the webpage
  // item = req.body.newItem;
  var item = req.body.newItem;
  items.push(item);

  //But you can not do res.render("list", {newListItem : item});   since the value if var item i smissing from the previous one
  //so pass it from app.get()
  res.redirect("/");
})

app.listen(3000, function() {
  console.log("Server started on port 3000")
});
