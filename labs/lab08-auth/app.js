const express = require("express");
const authService = require("./services/authService");

const app = express();
app.use(express.json());

app.use((error, req, res, next) => {
  if (error.type === "entity.parse.failed") {
    return res.status(400).json({ message: "Dữ liệu JSON không hợp lệ" });
  }
  if (error.type === "entity.too.large") {
    return res.status(413).json({ message: "Dữ liệu gửi lên quá lớn" });
  }

  return res.status(500).json({ message: "Lỗi máy chủ" });
});

function sendAuthError(res, error) {
  if (error instanceof authService.AuthError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: "Lỗi máy chủ" });
}

app.post("/api/auth/register", async (req, res) => {
  try {
    const { username, password } = req.body || {};
    const user = await authService.register(username, password);
    return res.status(201).json({ message: "Đăng ký thành công", user });
  } catch (error) {
    return sendAuthError(res, error);
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body || {};
    const user = await authService.login(username, password);
    return res.status(200).json({ message: "Đăng nhập thành công", user });
  } catch (error) {
    return sendAuthError(res, error);
  }
});

module.exports = app;
