const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// GET 요청에 대한 라우트 설정
app.get('/TEXT', (req, res) => {
  fs.readFile('TEXT.txt', 'utf-8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    }
  });
});

// POST 요청에 대한 라우트 설정
app.post('/update', (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    fs.writeFile('TEXT.txt', body, 'utf-8', (err) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.end('File Updated');
      }
    });
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
