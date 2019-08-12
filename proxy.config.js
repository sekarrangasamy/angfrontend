const PROXY_CONFIG = {
    "*": {
      "target": "http://localhost:3000",
      "secure": false,
      "pathRewrite": {
        "^/api": ""
      },
      "logLevel": "debug",
      "bypass": function (req, res, proxyOptions) {
        /* Fix for angular route refresh causes Not Found Error. For a browser requests, we want to serve a HTML page, but for an API request we want to proxy it.*/
  
        if (req.headers.accept && req.headers.accept.indexOf("html") !== -1) {
          console.log("Skipping proxy for browser request header ==> " + req.headers.accept);
          return "/index.html";
        }
      }
    }
  }
  
  module.exports = PROXY_CONFIG;
  