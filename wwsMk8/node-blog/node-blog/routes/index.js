let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
mongoose.connect("localhost:27017/WWS");
let Schema = mongoose.Schema;

let wwsSchema = new Schema(
  {
    ID: String,
    lat: String,
    long: String
  },
  { collection: "ids" }
);
let IdModel = mongoose.model("idInfo", wwsSchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
});


router.post("/getIds", function (req, res, next) {
  IdModel.find().then(function (docs) {
    let theDoc = docs[docs.length-1]
     console.log("/getIds: " + theDoc)
     // theDoc = JSON.stringify(theDoc)
    res.status(200).json(theDoc)
  });
});

module.exports = router;
