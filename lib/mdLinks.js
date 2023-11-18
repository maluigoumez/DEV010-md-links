const fs = require("fs");
const path = require("path");
const isMarkdownFile = require("./microTasks");
const readMdFile = require("./microTasks");

const mdLinks = (route) => {
  return new Promise((resolve, reject) => {
    try {
      const absoluteRoute = path.resolve(route);
      const routeExists = fs.existsSync(absoluteRoute);
      if (routeExists) {
        if (isMarkdownFile(absoluteRoute) === true) {
          const fileContent = readMdFile(absoluteRoute);

          resolve(fileContent);
        } else {
          reject(new Error("File is not a Markdown file."));
        }
      } else {
        reject(new Error("Route doesn't exist"));
      }
      //        throw "myException";
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = mdLinks;
