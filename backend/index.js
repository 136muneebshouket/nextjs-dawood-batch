const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));




app.get("/", (req, res) => {
  res.send("hello to backend");
});


app.get("/getdata", (req, res) => {
    console.log(req.query)
  res.json("hello from backend");
});

app.post("/postdata", (req, res) => {
   console.log(req.body)

  res.json("ur data has been recieved");
});





const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running perfectly on ${port}`);
});
