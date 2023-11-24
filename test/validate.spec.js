const axios = require("axios");
const validate = require("../lib/validate");

jest.mock("axios");

describe("validate", () => {
  test("Should return validated links", async () => {
    const links = [
      { href: "https://laboratoria.la", text: "test", file: "path" },
    ];

    const results = [
      {
        file: "path",
        href: "https://laboratoria.la",
        ok: "ok",
        status: 200,
        text: "test",
      },
    ];

    axios.get.mockResolvedValue({
      status: 200,
    });
    return validate(links).then((resolve) => {
      expect(resolve).toEqual(results);
    });
  });

  test("Should handle error when Axios returns an error", async () => {
    const links = [
      { href: "https://laboratoria.la", text: "test", file: "path" },
    ];

    axios.get.mockRejectedValue(new Error("Axios error"));

    return validate(links).catch((error) => {
      expect(error).toBeInstanceOf(Error);
    });
  });

  test("Should handle Axios error and set status to 'unknown'", async () => {
    const links = [
      { href: "https://laboratoria.la", text: "test", file: "path" },
    ];

    axios.get.mockRejectedValue({ response: { status: 404 } });

    return validate(links).then((result) => {
      expect(result[0].status).toBe("unknown");
    });
  });
});
