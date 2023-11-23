const fs = require("fs");
const path = require("path");
const filePath = "./examples/test.md";
// const mdLinks = require("../index.js");
const {
  isMarkdownFile,
  readMdFile,
  extractLinks,
} = require("../lib/microTasks.js");

// Test for isMarkdownFile ✅
describe("isMarkdownFile", () => {
  it("should return true for a markdown file", () => {
    const filePath = path.resolve("./examples/test.md");
    expect(isMarkdownFile(filePath)).toBe(true);
  });

  //  Test for isMarkdownFile ✅
  it("should return false for a non-markdown file", () => {
    const filePath = path.resolve("./index.js");
    expect(isMarkdownFile(filePath)).toBe(false);
  });
});

//  Test for readMdFile with mocks ⌛

describe("readMdFile", () => {
  const filePath = "./examples/test.md";

  it("should read the contents of a markdown file", () => {
    // Mocking fs.promises.readFile
    jest.spyOn(fs.promises, "readFile").mockResolvedValue("ok");

    //   (path, options, callback) => {
    //   callback(null, "ok"); // Simulate the successful reading of file content
    // });

    return readMdFile(filePath).then((content) => {
      expect(typeof content).toBe("string");
      expect(content).toBe("ok"); // Verify the content is 'ok'
    });
  });

  afterEach(() => {
    // Restore the original implementation after each test
    fs.promises.readFile.mockRestore();
  });
});

//  Test for extractLinks ✅
describe("extractLinks", () => {
  it("should extract links from a markdown file content", () => {
    const content = `[Link to google](https://google.com)`;
    const absoluteRoute = path.resolve("./examples/test.md");
    const links = extractLinks(content, absoluteRoute);
    expect(links.length).toBe(1);
    expect(links[0]).toEqual({
      href: "https://google.com",
      text: "Link to google",
      file: absoluteRoute,
    });
  });
});
