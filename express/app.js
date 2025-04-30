const express = require("express");
const path = require("path");
const app = express();

const students = require("./data");

const port = 3000;

// app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   console.log(req);
//   res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
// });

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Page not found</h1>");
// });

// app.get("/", (req, res) => {
//   // res.json([{ name: "hans rohit" }, { name: "jinju" }]);
//   res.send(`<h1>Home</h1></br><a href='/api/students/'>students</a>`);
//   // res.json(students);
// });

// app.get("/api/students", (req, res) => {
//   const stud = students.map((student) => {
//     const { id, name } = student;
//     return { id, name };
//   });
//   res.json(stud);
// });

// app.get("/api/students/:id", (req, res) => {
//   console.log(req);
//   console.log(req.params);
//   const { id } = req.params;
//   const singleStud = students.find((student) => student.id === Number(id));
//   if (!singleStud) return res.status(404).send("<h1>product not found</h1>");
//   res.json(singleStud);
// });

// app.get("/api/sortedStudents/search", (req, res) => {
//   console.log(req.query);
//   const { name, profile, limit } = req.query;
//   let sortedStudents = [...students];
//   if (name) {
//     sortedStudents = sortedStudents.filter((student) => {
//       return student.name.startsWith(name);
//     });
//   }
//   if (profile) {
//     sortedStudents = sortedStudents.filter((student) => {
//       return student.profile.includes(profile);
//     });
//   }
//   if (limit) {
//     sortedStudents = sortedStudents.slice(0, Number(limit));
//   }
//   if (sortedStudents < 1) {
//     res.status(404).send("student not matches");
//   }
//   res.status(200).json(sortedStudents);
// });

const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("testing");
  next();
};

app.get("/", logger, (req, res) => {
  res.send("home");
});

app.listen(port, function (err) {
  if (err) console.log(err);
  else console.log(`running successfully on port: ${port}`);
});
