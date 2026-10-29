const request = require("supertest");
const app = require("../app");
const authService = require("../services/authService");

const password = "Student@123";
let nextTestUserId = 1;

function newUsername() {
  return `student_${nextTestUserId++}`;
}

async function createUser(username = newUsername()) {
  const response = await request(app)
    .post("/api/auth/register")
    .send({ username, password });
  expect(response.status).toBe(201);
  return username;
}

describe("API Đăng ký / Đăng nhập", () => {
  test("Đăng ký tài khoản thành công và không lộ mật khẩu", async () => {
    const username = newUsername();
    const response = await request(app)
      .post("/api/auth/register")
      .send({ username, password });

    expect(response.status).toBe(201);
    expect(response.body.user.username).toBe(username);
    expect(response.body.user.passwordHash).toBeUndefined();
    expect(response.body.user.password).toBeUndefined();
  });

  test("Không cho đăng ký trùng tên", async () => {
    const username = await createUser();
    const response = await request(app)
      .post("/api/auth/register")
      .send({ username, password });

    expect(response.status).toBe(409);
  });

  test("Đăng nhập thành công", async () => {
    const username = await createUser();
    const response = await request(app)
      .post("/api/auth/login")
      .send({ username, password });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Đăng nhập thành công");
    expect(response.body.user.passwordHash).toBeUndefined();
  });

  test("Từ chối mật khẩu sai", async () => {
    const username = await createUser();
    const response = await request(app)
      .post("/api/auth/login")
      .send({ username, password: "WrongPass123" });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Tên đăng nhập hoặc mật khẩu không đúng");
  });

  test("Từ chối tài khoản không tồn tại mà không tiết lộ lý do", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ username: newUsername(), password });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Tên đăng nhập hoặc mật khẩu không đúng");
  });

  test("Từ chối mật khẩu quá ngắn", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ username: newUsername(), password: "123" });

    expect(response.status).toBe(400);
  });

  test("Từ chối tên đăng nhập chỉ chứa khoảng trắng", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ username: "   ", password });

    expect(response.status).toBe(400);
  });

  test("Từ chối khi thiếu mật khẩu", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ username: newUsername() });

    expect(response.status).toBe(400);
  });

  test("Từ chối kiểu dữ liệu không đúng khi đăng ký", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ username: 42, password });

    expect(response.status).toBe(400);
  });

  test("Từ chối kiểu dữ liệu không đúng khi đăng nhập", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ username: newUsername(), password: 42 });

    expect(response.status).toBe(400);
  });

  test("Từ chối JSON sai cú pháp mà không lộ chi tiết nội bộ", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .set("Content-Type", "application/json")
      .send('{"username":');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "Dữ liệu JSON không hợp lệ" });
  });

  test("Từ chối yêu cầu không có body", async () => {
    const response = await request(app).post("/api/auth/register");
    expect(response.status).toBe(400);
  });

  test("Từ chối body vượt giới hạn", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ username: "a".repeat(110000), password });

    expect(response.status).toBe(413);
    expect(response.body).toEqual({ message: "Dữ liệu gửi lên quá lớn" });
  });

  test("Chuẩn hóa tên đăng nhập ở cả đăng ký và đăng nhập", async () => {
    const username = newUsername();
    const registered = await request(app)
      .post("/api/auth/register")
      .send({ username: `  ${username.toUpperCase()}  `, password });
    const loggedIn = await request(app)
      .post("/api/auth/login")
      .send({ username: ` ${username} `, password });

    expect(registered.status).toBe(201);
    expect(registered.body.user.username).toBe(username);
    expect(loggedIn.status).toBe(200);
  });

  test("Từ chối tên đăng nhập quá dài", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ username: "a".repeat(51), password });

    expect(response.status).toBe(400);
  });

  test("Từ chối mật khẩu vượt giới hạn byte của bcrypt", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ username: newUsername(), password: "é".repeat(40) });

    expect(response.status).toBe(400);
  });

  test("Hai yêu cầu đăng ký đồng thời không tạo trùng tên", async () => {
    const username = newUsername();
    const responses = await Promise.all([
      request(app).post("/api/auth/register").send({ username, password }),
      request(app).post("/api/auth/register").send({ username, password })
    ]);

    expect(responses.map(response => response.status).sort()).toEqual([201, 409]);
  });

  test("Lỗi nội bộ không bị gửi cho client", async () => {
    const register = jest.spyOn(authService, "register")
      .mockRejectedValueOnce(new Error("internal detail"));

    try {
      const response = await request(app)
        .post("/api/auth/register")
        .send({ username: newUsername(), password });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: "Lỗi máy chủ" });
    } finally {
      register.mockRestore();
    }
  });

  test("Lỗi nội bộ khi đăng nhập không bị gửi cho client", async () => {
    const login = jest.spyOn(authService, "login")
      .mockRejectedValueOnce(new Error("internal detail"));

    try {
      const response = await request(app)
        .post("/api/auth/login")
        .send({ username: newUsername(), password });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: "Lỗi máy chủ" });
    } finally {
      login.mockRestore();
    }
  });
});
