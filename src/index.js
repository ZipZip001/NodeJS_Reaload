const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Thêm dòng này để sử dụng middleware cors

const users = [
  { email: "user1@example.com", password: "12345678", username: "User 1" },
  { email: "user2@example.com", password: "12345678", username: "User 2" }
];

// Tuyến đường đăng nhập
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    const userData = {
      email: user.email,
      username: user.username,
      password: password.password
    };
    res.json({ user: userData, message: "Đăng nhập thành công" });
  } else {
    res.status(401).json({ error: "Email hoặc mật khẩu không chính xác" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello this is my api");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
