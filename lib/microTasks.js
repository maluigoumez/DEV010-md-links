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
  return fs.promises.readFile(mdFile, "utf-8");
};

const extractLinks = (fileContent, absoluteRoute) => {
  const links = [];
  const linkRegex = /(\[([^\]]*)\]\(([^)]*)\))/g;
  let match;
  while ((match = linkRegex.exec(fileContent)) !== null) {
    const [, fullMatch, text, href] = match;
    // console.log(href, text, absoluteRoute);
    links.push({ href, text, file: absoluteRoute });
  }
  // console.log(links);
  return links;
};

module.exports = { isMarkdownFile, readMdFile, extractLinks };
