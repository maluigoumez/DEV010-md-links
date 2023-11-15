const mdLinks = require("./index.js");

const filePath = "./examples/test.md";

// Calling mdLinks function to extract links
mdLinks(filePath)
  .then((result) => {
    console.log("Extracted links:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
