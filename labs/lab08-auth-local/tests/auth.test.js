const request = require('supertest');
const { createApp } = require('../app');

let app;
const account = { username: 'student01', password: 'Student@123' };
beforeEach(() => { app = createApp(); });
const register = (data = account) => request(app).post('/api/auth/register').send(data);
const login = (data = account) => request(app).post('/api/auth/login').send(data);

test('Đăng ký thành công và không lộ thông tin mật khẩu', async () => {
  const res = await register();
  expect(res.status).toBe(201);
  expect(res.body.user).toEqual({ id: 1, username: account.username });
});
test('Từ chối tên trùng', async () => {
  await register();
  expect((await register()).status).toBe(409);
});
test('Đăng nhập thành công', async () => {
  await register();
  const res = await login();
  expect(res.status).toBe(200);
  expect(res.body.user).toEqual({ id: 1, username: account.username });
});
test('Từ chối mật khẩu sai', async () => {
  await register();
  expect((await login({ ...account, password: 'WrongPass123' })).status).toBe(401);
});
test('Từ chối tài khoản không tồn tại', async () => {
  expect((await login()).status).toBe(401);
});
test.each([
  { ...account, password: '123' },
  { ...account, username: '   ' },
  { username: 'student01' },
  { ...account, username: 123 },
  { ...account, password: 123 },
  { ...account, password: '' },
  { ...account, username: '<script>alert(1)</script>' },
  { ...account, password: 'a'.repeat(73) },
  { ...account, password: 'ế'.repeat(25) }
])('Từ chối dữ liệu đăng ký không hợp lệ %#', async (data) => {
  expect((await register(data)).status).toBe(400);
});
test('Chuẩn hóa tên khi đăng ký và đăng nhập', async () => {
  expect((await register({ ...account, username: ' Student01 ' })).body.user.username).toBe('student01');
  expect((await login({ ...account, username: ' STUDENT01 ' })).status).toBe(200);
});
test('Hai đăng ký đồng thời chỉ tạo một tài khoản', async () => {
  const responses = await Promise.all([register(), register()]);
  expect(responses.map(res => res.status).sort()).toEqual([201, 409]);
});
test('Đăng nhập thiếu dữ liệu', async () => {
  expect((await login({})).status).toBe(400);
});
test('Từ chối JSON lỗi', async () => {
  const res = await request(app).post('/api/auth/register').set('Content-Type', 'application/json').send('{');
  expect(res.status).toBe(400);
});
test('Giới hạn kích thước request', async () => {
  expect((await register({ ...account, extra: 'a'.repeat(11000) })).status).toBe(413);
});
test('Không lộ chi tiết lỗi nội bộ', async () => {
  const brokenApp = createApp({ register: async () => { throw new Error('SECRET'); } });
  const res = await request(brokenApp).post('/api/auth/register').send(account);
  expect(res.status).toBe(500);
  expect(JSON.stringify(res.body)).not.toContain('SECRET');
});
