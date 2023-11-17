const mdLinks = require("./lib/mdLinks.js");
// mdLinks("./some/example.md")
mdLinks("./README.md")
  .then((links) => {
    console.log(links);
  })
  .catch(console.error);
