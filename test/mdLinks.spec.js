const fs = require("fs");
const path = require("path");
const filePath = "./examples/test.md";
const mdLinks = require("../index.js");
const {
  isMarkdownFile,
  readMdFile,
  extractLinks,
} = require("../lib/microTasks.js");

describe("Micro Tasks", () => {
  // Define mock file content within the test scope
  const mockFileContent = "This is a test markdown file";

  // Setting up the fs module mocks for 'readFile' and 'access'
  jest.mock("fs", () => ({
    promises: {
      access: jest.fn(),
      readFile: jest.fn().mockResolvedValue({
        // buffer: Buffer.from(mockFileContent),
        toString: () => mockFileContent,
      }),
    },
  }));

  ///////////////////////////////////////////////////////////////////////////////////////////// Test for isMarkdownFile
  describe("isMarkdownFile", () => {
    it("should return true for a markdown file", () => {
      const filePath = path.resolve("./examples/test.md");
      expect(isMarkdownFile(filePath)).toBe(true);
    });

    it("should return false for a non-markdown file", () => {
      const filePath = path.resolve("./index.js");
      expect(isMarkdownFile(filePath)).toBe(false);
    });
  });

  ////////////////////////////////////////////////////////////////////////////////////// Test for readMdFile with mocks
  describe("readMdFile", () => {
    it("should read the contents of a markdown file", () => {
      const filePath = path.resolve("./examples/test.md");

      readMdFile(filePath).then((content) => {
        // Verify type of content.buffer
        expect(typeof content.buffer).toBe("string");
        expect(content.buffer).toBe(mockFileContent); // Verify mock content is returned
      });
    });
  });

  afterEach(() => {
    // Reset mock after each test for fs.promises.readFile
    fs.promises.readFile.mockReset();
  });

  //////////////////////////////////////////////////////////////////////////////////////////////// Test for extractLinks
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
});
