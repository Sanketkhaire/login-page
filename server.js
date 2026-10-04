const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve the form files (index.html, style.css, script.js) from this folder
app.use(express.static(path.join(__dirname)));

// Same rules as the front end, repeated here because client checks can be bypassed
function validate(email, password) {
  if (!email || !password) {
    return "Both email and password are required.";
  }
  if (!email.includes("@")) {
    return "Email must contain an @ symbol.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }
  return "";
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const error = validate(email, password);
  if (error !== "") {
    return res.status(400).json({ message: error });
  }

  res.json({ message: "Login details are valid." });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
