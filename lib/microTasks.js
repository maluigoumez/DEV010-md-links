// all functions I guess

// 1. turn route from relative to absolute

// 2. verify if that path exists locally

const path = require("path");
const fs = require("fs");

const mdLinks = (route) => {
  return new Promise((resolve, reject) => {
    const absoluteRoute = path.resolve(route);
    const routeExists = fs.existsSync(absoluteRoute);
    if (routeExists) {
      resolve(absoluteRoute);
    } else {
      reject(new Error("Route doesn't exist"));
    }
  });
};

module.exports = mdLinks;
