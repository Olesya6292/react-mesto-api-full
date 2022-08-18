/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken');

// вставьте сюда JWT, который вернул публичный сервер
const YOUR_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY5Mzk0ZGZiN2I5ODQ3ZWNhMjI0MjIiLCJpYXQiOjE2NjA4MzczNzAsImV4cCI6MTY2MTQ0MjE3MH0.T7dod3jbuSyHSAzvwvrKWdedFNX0qS-RyZjsXJzol0o';

// вставьте сюда секретный ключ для разработки из кода
const SECRET_KEY_DEV = 'dev-key';

try {
  jwt.verify(YOUR_JWT, SECRET_KEY_DEV);
  console.log(
    '\x1b[31m%s\x1b[0m',
    `
Надо исправить. В продакшне используется тот же
секретный ключ, что и в режиме разработки.
`,
  );
} catch (err) {
  if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Всё в порядке. Секретные ключи отличаются',
    );
  } else {
    console.log('\x1b[33m%s\x1b[0m', 'Что-то не так', err);
  }
}
