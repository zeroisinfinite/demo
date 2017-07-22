var path = require("path");

module.exports = {
    appname: "dashboard",
    ip:'localhost',
    env: "dev",
    enableCluster: false,
    port: 7009,
   // logDir: path.join(__dirname, "../logs"),
    root: [
    ],
    buc          : {
        env    : "development",
        appname: "dashboard",
        //key    : "buc_user",
        secret : "1fc3214661f14d7a92ad517c986bc54c"
    },
    admin: {
        path: /^\/admin/
    },
    cookieSecret: "projx_cookie_1394853009",
    sessionCookie: "_xsid_",
    sessionSecret: "projx_session_1392178139",
    // userKey: "projx_alier",
    // userKey: "xman_alier",
    csrfToken: "csrf",
    viewCache: false
};
