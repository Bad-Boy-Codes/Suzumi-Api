import axios from "axios";

export = class SuzumiApi {
  public token: string;
  public baseURL: string;

  constructor(args?: { token?: string; url?: string }) {
    this.token = args?.token ?? "suzumiApiIsCool";

    this.baseURL = args?.url ?? "https://badboy.is-a.dev/api";
  }

  async image(endpoint: string, params = {}) {
    if (!endpoint) throw "Missing endpoint";

    let image = await axios.get(`${this.baseURL}/image/${endpoint}`, {
      params,
      responseType: 'arraybuffer',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (image.status == 404)
      return {
        error: "Unknown Endpoint.",
      };

    return image.data;
  }

  async json(endpoint: string, params = {}) {
    if (!endpoint) throw "Missing endpoint";

    let json = await axios.get(`${this.baseURL}/json/${endpoint}`, {
      params,
      responseType: 'arraybuffer',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (json.status == 404)
      return {
        error: "Unknown Endpoint.",
      };

    return json.data;
  }

  async get(category: string, endpoint: string, params = {}) {
    if (!endpoint) throw "Missing endpoint";
    let request = await axios.get(`${this.baseURL}/${category}/${endpoint}`, {
      params,
      responseType: 'arraybuffer',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (request.status == 404)
      return {
        error: "Unknown Endpoint.",
      };

    return request.data;
  }
  async endpoints() {
    let request = await axios.post(this.baseURL);
    return request.data;
  }
};
