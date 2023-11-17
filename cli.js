const mdLinks = require("./index");

mdLinks("examples/test.md")
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });
