const { json } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const sendMail = require("./mail");

const PORT = 8080;

// Data Parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/email", (req, res) => {
  const { subject, email, text } = req.body;
  console.log("Data: ", req.body);
  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent!" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.listen(PORT, () => {
  console.log("Server is starting on PORT", PORT);
});
app.use("/static", express.static("static"));
