const { createProxyMiddleware } = require("http-proxy-middleware");
const { userService } = require("../config/services");

module.exports = createProxyMiddleware({
  target: userService,
  changeOrigin: true,
  pathRewrite: {
    "^/api/users": ""
  }
});
