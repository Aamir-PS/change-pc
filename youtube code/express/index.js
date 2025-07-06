const express = require("express");
const app = express();
const path = require("path");
const port = 5001;

const harryMiddleware = (req, res, next) =>{
   console.log(req); 
   next() 
};
app.use(express.static(path.join(__dirname, "public")));
app.use(harryMiddleware) ;

app.get("/", (req, res) => {
  res.send(`hell world!`);
  res.status(201);
});

app.get("/hello/:name", (req, res) => {
  res.send(`hell wor ` + req.params.name);
  res.status(201);
});

app.get("/about", (req, res) => {
  //  res.send(`about`);
  res.sendFile(path.join(__dirname, "index.html"));
  res.status(200);
  res.json({"harry": 25})
});
app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
