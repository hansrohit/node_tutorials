const express = require("express");
const path = require("path");
const app = express();

const port = 3000;
app.use(express.static("./public"));

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Page not found</h1>");
// });

app.listen(port, function (err) {
  if (err) console.log(err);
  else console.log(`running successfully on port: ${port}`);
});
