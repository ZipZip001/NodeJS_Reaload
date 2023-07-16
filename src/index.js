const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Tạo một danh sách người dùng (đây chỉ là ví dụ, bạn cần có cơ chế lưu trữ thực tế)
const users = [
  { email: "user1@example.com", password: "12345678" },
  { email: "user2@example.com", password: "12345678" }
];

// Tuyến đường đăng nhập
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Kiểm tra xem email và mật khẩu có khớp với người dùng trong danh sách hay không
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Đăng nhập thành công
    res.json({ message: "Đăng nhập thành công" });
  } else {
    // Sai thông tin đăng nhập
    res.status(401).json({ error: "Email hoặc mật khẩu không chính xác" });
  }
});

// Khởi động máy chủ
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});