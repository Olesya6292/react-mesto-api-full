/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken');

// вставьте сюда JWT, который вернул публичный сервер
const YOUR_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY5Mzk0ZGZiN2I5ODQ3ZWNhMjI0MjIiLCJpYXQiOjE2NjA3NTA4MTIsImV4cCI6MTY2MTM1NTYxMn0.884iF9eat4MwCVIkxSBqbpAJbIDz5ChrIo-14PaweG0';

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
