const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors("*"));

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(4000, () => {
  console.log(`server is listening on port ${4000}`);
});