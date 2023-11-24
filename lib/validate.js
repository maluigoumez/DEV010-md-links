const axios = require("axios");

const validate = (links) => {
  const validatePromises = links.map((link) => {
    return axios
      .get(link.href)
      .then((response) => ({
        ...link,
        status: response.status,
        ok: response.status >= 200 && response.status < 400 ? "ok" : "fail",
      }))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          return {
            ...link,
            status: "unknown",
            ok: "fail",
          };
        } else {
          return {
            ...link,
            status: error.response ? error.response.status : "unknown",
            ok: "fail",
          };
        }
      });
  });

  return Promise.all(validatePromises);
};

module.exports = validate;
