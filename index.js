const mdLinks = require("./lib/mdLinks.js");
// mdLinks("./some/example.md")
// mdLinks("./cli.js")
mdLinks("./examples/test.md")
  .then((links) => {
    console.log(links);
  })
  .catch(console.error);
