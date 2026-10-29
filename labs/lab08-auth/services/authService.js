const bcrypt = require("bcryptjs");

const MAX_USERNAME_LENGTH = 50;
const MAX_PASSWORD_BYTES = 72;
const users = [];
let nextId = 1;

class AuthError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "AuthError";
    this.statusCode = statusCode;
  }
}

function normalizeUsername(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    throw new AuthError("Tên đăng nhập và mật khẩu phải là chuỗi", 400);
  }

  const normalizedUsername = username.trim().toLowerCase();
  if (!normalizedUsername || !password) {
    throw new AuthError("Tên đăng nhập và mật khẩu là bắt buộc", 400);
  }
  if (normalizedUsername.length > MAX_USERNAME_LENGTH) {
    throw new AuthError("Tên đăng nhập quá dài", 400);
  }
  if (Buffer.byteLength(password, "utf8") > MAX_PASSWORD_BYTES) {
    throw new AuthError("Mật khẩu quá dài", 400);
  }

  return normalizedUsername;
}

async function register(username, password) {
  const normalizedUsername = normalizeUsername(username, password);
  if (password.length < 8) {
    throw new AuthError("Mật khẩu phải có ít nhất 8 ký tự", 400);
  }

  if (users.some(user => user.username === normalizedUsername)) {
    throw new AuthError("Tên đăng nhập đã tồn tại", 409);
  }

  const passwordHash = await bcrypt.hash(password, 10);

  // Kiểm tra lại sau await để hai yêu cầu đồng thời không tạo trùng tài khoản.
  if (users.some(user => user.username === normalizedUsername)) {
    throw new AuthError("Tên đăng nhập đã tồn tại", 409);
  }

  const user = { id: nextId++, username: normalizedUsername, passwordHash };
  users.push(user);
  return { id: user.id, username: user.username };
}

async function login(username, password) {
  const normalizedUsername = normalizeUsername(username, password);
  const user = users.find(item => item.username === normalizedUsername);

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new AuthError("Tên đăng nhập hoặc mật khẩu không đúng", 401);
  }

  return { id: user.id, username: user.username };
}

module.exports = { AuthError, register, login };
