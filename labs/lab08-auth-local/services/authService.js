const bcrypt = require('bcryptjs');

class AppError extends Error {
  constructor(code, message, status) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

// Each instance owns its data so tests do not depend on one another.
function createAuthService() {
  const users = new Map();
  let nextId = 1;

  function validate(username, password) {
    if (typeof username !== 'string' || typeof password !== 'string') {
      throw new AppError('INVALID_INPUT', 'Tên đăng nhập và mật khẩu phải là chuỗi', 400);
    }
    const normalizedUsername = username.trim().toLowerCase();
    if (!normalizedUsername || !password) {
      throw new AppError('REQUIRED_INPUT', 'Tên đăng nhập và mật khẩu là bắt buộc', 400);
    }
    if (!/^[a-z0-9_]{3,50}$/.test(normalizedUsername) || Buffer.byteLength(password, 'utf8') > 72) {
      throw new AppError('INVALID_INPUT', 'Tên đăng nhập cần 3–50 ký tự a-z, 0-9 hoặc _; mật khẩu tối đa 72 byte', 400);
    }
    return normalizedUsername;
  }

  async function register(username, password) {
    const normalizedUsername = validate(username, password);
    if (password.length < 8) {
      throw new AppError('SHORT_PASSWORD', 'Mật khẩu phải có ít nhất 8 ký tự', 400);
    }
    const passwordHash = await bcrypt.hash(password, 10);
    // No await between this check and set: concurrent requests in this process cannot insert duplicates.
    if (users.has(normalizedUsername)) {
      throw new AppError('USERNAME_EXISTS', 'Tên đăng nhập đã tồn tại', 409);
    }
    const user = { id: nextId++, username: normalizedUsername, passwordHash };
    users.set(normalizedUsername, user);
    return { id: user.id, username: user.username };
  }

  async function login(username, password) {
    const normalizedUsername = validate(username, password);
    const user = users.get(normalizedUsername);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new AppError('INVALID_CREDENTIALS', 'Tên đăng nhập hoặc mật khẩu không đúng', 401);
    }
    return { id: user.id, username: user.username };
  }

  return { register, login };
}

module.exports = { createAuthService, AppError };
