const { createProxyMiddleware } = require("http-proxy-middleware");
const { phoneService } = require("../config/services");

module.exports = createProxyMiddleware({
  target: phoneService,
  changeOrigin: true,
  pathRewrite: {
    "^/api/phones": ""
  }
});
