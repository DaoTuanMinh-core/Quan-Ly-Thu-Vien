// Launch wrapper only: the original app and service are unchanged.
const app = require('./app');
const port = Number(process.env.PORT || 3001);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be an integer from 1 to 65535');
app.listen(port, '127.0.0.1', () => console.log('Original Lab 8 API: http://127.0.0.1:' + port));
