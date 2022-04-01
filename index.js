const { get } = require("axios");

module.exports = class SuzumiApi {
  constructor({ token = "suzumiApiIsCool" }) {
    this.token = token;

    this.baseURL = "https://badboy.is-a.dev/api";
  }

  async image(endpoint, data = {}) {
    if (!endpoint) throw "Missing endpoint";

    try {
      let image = await get(`${this.baseURL}/image/${endpoint}`, {
        params: {
          data,
        },

        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (res.status == 404)
        return {
          error: "Unknown Endpoint.",
        };

      return image.data;
    } catch (err) {
      throw err;
    }
  }

  async json(endpoint, data = {}) {
    if (!endpoint) throw "Missing endpoint";

    try {
      let json = await get(`${this.baseURL}/json/${endpoint}`, {
        params: {
          data,
        },

        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (res.status == 404)
        return {
          error: "Unknown Endpoint.",
        };

      return image.data;
    } catch (err) {
      throw err;
    }
  }

  async get(category, endpoint, data = {}) {
    if (!endpoint) throw "Missing endpoint";

    try {
      let request = await get(`${this.baseURL}/${category}/${endpoint}`, {
        params: {
          data,
        },

        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (res.status == 404)
        return {
          error: "Unknown Endpoint.",
        };

      return request.data;
    } catch (err) {
      throw err;
    }
  }
};
;