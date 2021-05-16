'use strict';

const express = require('express');
const path = require('path');// パス指定用モジュール

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, 'public')));
