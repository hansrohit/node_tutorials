const http = require("http");
const fs = require("fs");

const port = 5000;
const homepage = fs.readFileSync("./index.html");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead("200", { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>page not found</h1>`);
    res.end();
  }
});

server.listen(port, function (err) {
  if (err) console.log(err);
  else console.log(`running successfully on port ${port}`);
});
