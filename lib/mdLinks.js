const fs = require("fs");
const path = require("path");
const validateFunction = require("./validate");
const { readMdFile, isMarkdownFile, extractLinks } = require("./microTasks");
// const readMdFile = require("./microTasks");

const mdLinks = (route, validateFlag) => {
  // validate: Boolean that determines if you want to validate the links found.
  return new Promise((resolve, reject) => {
    try {
      const absoluteRoute = path.resolve(route);
      // const routeExists = fs.existsSync(absoluteRoute);
      const routeExists = fs.promises.access(absoluteRoute);
      if (routeExists) {
        // console.log(isMarkdownFile(absoluteRoute));
        if (isMarkdownFile(absoluteRoute) === true) {
          // fs.promises.readFile(absoluteRoute)
          const fileContent = readMdFile(absoluteRoute).then((result) => {
            const links = extractLinks(result, absoluteRoute);

            // console.log("" + result);
            // const testing = extractLinks(result, absoluteRoute);
            // /////////////////////////////////////////////////////////////////////////
            // resolve(testing);
            if (validateFlag) {
              validateFunction(links).then((validatedLinks) => {
                resolve(validatedLinks);
              });
            } else {
              resolve(links);
            }
          }); // .catch((error) => {
          //   console.log(error);
          //   reject(error);
          // });
          /////////////////////////////////////////////////////////////////////////
        } else {
          reject(new Error("File is not a Markdown file."));
        }
      } else {
        reject(new Error("Route doesn't exist"));
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = mdLinks;
