const express = require('express');
const { createAuthService, AppError } = require('./services/authService');

function createApp(authService = createAuthService()) {
  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '10kb' }));

  for (const [action, status, message] of [
    ['register', 201, 'Đăng ký thành công'],
    ['login', 200, 'Đăng nhập thành công']
  ]) {
    app.post(`/api/auth/${action}`, async (req, res, next) => {
      try {
        const { username, password } = req.body || {};
        const user = await authService[action](username, password);
        res.status(status).json({ message, user });
      } catch (error) {
        next(error);
      }
    });
  }

  app.use((error, req, res, next) => {
    if (error instanceof AppError) {
      return res.status(error.status).json({ code: error.code, message: error.message });
    }
    if (error.type === 'entity.parse.failed') {
      return res.status(400).json({ code: 'INVALID_JSON', message: 'JSON không hợp lệ' });
    }
    if (error.type === 'entity.too.large') {
      return res.status(413).json({ code: 'PAYLOAD_TOO_LARGE', message: 'Dữ liệu quá lớn' });
    }
    return res.status(500).json({ code: 'INTERNAL_ERROR', message: 'Lỗi hệ thống' });
  });
  return app;
}

module.exports = { createApp };
