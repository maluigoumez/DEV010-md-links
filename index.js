const mdLinks = require("./lib/mdLinks.js");
// mdLinks("./some/example.md")
// mdLinks("./cli.js")
// mdLinks("./examples/test.md", true)
mdLinks("./README.md", true)
  .then((links) => {
    console.log(links);
  })
  .catch(console.error);

// console.log(process.argv);
