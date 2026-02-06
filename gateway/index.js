const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('API Gateway is running');
});

// Debug logging
app.use((req, res, next) => {
  console.log(`[Gateway] ${req.method} ${req.originalUrl}`);
  next();
});

/**
 * BOOKS SERVICE
 * Incoming:  /api/books
 * Forwarded: http://localhost:3001/books
 *
 * No regex rewrite. No trailing slash issues.
 * We manually build the correct target path.
 */
app.use('/api/books', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
  pathRewrite: (path, req) => {
    return '/books'   // always forward to /books
  }
}));

/**
 * PHONES SERVICE
 * Incoming:  /api/phones
 * Forwarded: http://localhost:3002/phones
 */
app.use('/api/phones', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
  pathRewrite: (path, req) => {
    return '/phones'
  }
}));

// Start gateway
app.listen(3003, () => {
  console.log('API Gateway running at http://localhost:3003');
});