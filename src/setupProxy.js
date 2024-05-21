const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/pdf-proxy",
    createProxyMiddleware({
      target:
        "https://server-image-doctorapp-clinickhojo.s3.ap-south-1.amazonaws.com",
      changeOrigin: true,
      pathRewrite: {
        "^/pdf-proxy": "",
      },
    })
  );
};
