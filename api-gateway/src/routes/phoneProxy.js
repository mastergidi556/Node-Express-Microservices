require("dotenv").config();
const { createProxyMiddleware } = require("http-proxy-middleware");
const { phoneService } = require("../config/services");

module.exports = createProxyMiddleware({
  target: process.env.PHONE_SERVICE_URL || phoneService,
  changeOrigin: true,
  pathRewrite: {
    "^/": "/api/phones"
  }
});
