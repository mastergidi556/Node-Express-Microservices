require("dotenv").config();
const { createProxyMiddleware } = require("http-proxy-middleware");
const { userService } = require("../config/services");

module.exports = createProxyMiddleware({
  target: process.env.USER_SERVICE_URL || userService,
  changeOrigin: true,
  pathRewrite: {
    "^/": "/api/users"
  }
});
