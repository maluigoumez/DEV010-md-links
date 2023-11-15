const mdLinks = require("./lib/mdLinks.js");

mdLinks("./some/example.md")
  .then((links) => {
    console.log(links);
  })
  .catch(console.error);

// const fs = require("fs");
// const  { getAbsoluteExtension, processMarkdownContent, validateLinks } = require('./lib/app.js');

// const mdLinks (filePath) => {
//   return new Promise((resolve, reject) => {

//     if (!fs.existsSync(filePath)) {
//       reject(new Error('File path does not exist.'));
//       return;
//     }

//     const { absolutePath, extname } = getAbsoluteExtension(filePath);
//       // Verifies if the ext file is a MD file
//      const markdownExtensions = [
//       ".md",
//       ".mkd",
//       ".mdwn",
//       ".mdtxt",
//       ".mdtext",
//       ".markdown",
//       ".text",
//     ];

//     if (!markdownExtensions.includes(extname)) {
//       reject(new Error('File is not a Markdown file.'));
//       return;
//     }
//         // if it is a MD file, it continues with the reading
//         fs.promises
//           .readFile(absolutePath, "utf8")
//           .then((markdownContent) => {
//             const links = processMarkdownContent(markdownContent, absolutePath);
//             if (validate) {
//               return validateLinks(links);
//             } else {
//               resolve(links);
//             }
//           })
//           .then((result) => {
//             resolve(result);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//           });

//         };

// module.exports = mdLinks;
