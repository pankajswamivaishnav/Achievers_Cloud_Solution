const fs = require("fs");
const path = require("path");

const redirectsPath = path.join(__dirname, "_redirects");
const buildRedirectsPath = path.join(__dirname, "build", "_redirects");

fs.copyFileSync(redirectsPath, buildRedirectsPath);
