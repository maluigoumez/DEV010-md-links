const path = require("path");
const fs = require("fs");
const mdExt = [
  ".md",
  ".mkd",
  ".mdown",
  ".mdtxt",
  ".mdtext",
  ".markdown",
  ".text",
];

const isMarkdownFile = (route) => {
  const fileExtension = path.extname(route);
  return mdExt.includes(fileExtension);
};

const readMdFile = (mdFile) => {
  fs.readFile(mdFile, "utf-8", (err, data) => {
    if (err) {
      console.log("error: ", err);
      throw error;
    } else {
      console.log(data);
      return data;
    }
  });
};

module.exports = isMarkdownFile;
module.exports = readMdFile;
