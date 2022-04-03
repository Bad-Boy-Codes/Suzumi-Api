import axios from "axios";

export = class SuzumiApi {
  public token: string;
  public baseURL: string;

  constructor(args?: { token?: string; url?: string }) {
    this.token = args?.token ?? "suzumiApiIsCool";

    this.baseURL = args?.url ?? "https://badboy.is-a.dev/api";
  }

  async image(endpoint: string, data = {}) {
    if (!endpoint) throw "Missing endpoint";

    try {
      let image = await axios.get(`${this.baseURL}/image/${endpoint}`, {
        params: {
          data,
        },

        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (image.status == 404)
        return {
          error: "Unknown Endpoint.",
        };

      return image.data;
    } catch (err) {
      throw err;
    }
  }

  async json(endpoint: string, data = {}) {
    if (!endpoint) throw "Missing endpoint";

    try {
      let json = await axios.get(`${this.baseURL}/json/${endpoint}`, {
        params: {
          data,
        },

        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (json.status == 404)
        return {
          error: "Unknown Endpoint.",
        };

      return json.data;
    } catch (err) {
      throw err;
    }
  }

  async get(category: string, endpoint: string, data = {}) {
    if (!endpoint) throw "Missing endpoint";

    try {
      let request = await axios.get(`${this.baseURL}/${category}/${endpoint}`, {
        params: {
          data,
        },

        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (request.status == 404)
        return {
          error: "Unknown Endpoint.",
        };

      return request.data;
    } catch (err) {
      throw err;
    }
  }
  async endpoints() {
    let request = await axios.post(this.baseURL);
    return request.data;
  }
};
