import fetch from "node-fetch";

module.exports = class SuzumiApi {
  constructor({
    token = "suzumiApiIsCool"
  }) {
    this.token = token;
    this.baseURL = "https://badboy.is-a.dev/api";
  }

  async image(endpoint, data = {}) {
    if (!endpoint) throw "Missing endpoint";
    var url = new URL(`${this.baseURL}/image/${endpoint}`);

    Object.keys(data).forEach((key) => url.searchParams.append(key, data[key]));

    try {
      let image = await fetch(url, {
        headers: {
          Authorization: this.token
        }
      });
      if (res.status == 404) return {
        error: "Unknown Endpoint."
      }
      if ([400, 500, 411].includes(image.status)) return image.json();

      return image.body;

    } catch (err) {
      throw err;
    }
  }

  async json(endpoint, data = {}) {
    if (!endpoint) throw "Missing endpoint";
    var url = new URL(`${this.baseURL}/json/${endpoint}`);

    Object.keys(data).forEach((key) => url.searchParams.append(key, data[key]));

    try {
      let json = await fetch(url, {
        headers: {
          Authorization: this.token
        }
      });
      if (res.status == 404) return {
        error: "Unknown Endpoint."
      }

      return image.json();

    } catch (err) {
      throw err;
    }
  }

  async get(category, endpoint, data = {}) {
    if (!endpoint) throw "Missing endpoint";
    var url = new URL(`${this.baseURL}/${category}/${endpoint}`);

    Object.keys(data).forEach((key) => url.searchParams.append(key, data[key]));

    try {
      let request = await fetch(url, {
        headers: {
          Authorization: this.token
        }
      });
      if (res.status == 404) return {
        error: "Unknown Endpoint."
      }
      if ([400, 500, 411].includes(request.status)) return request.json();

      if (category.toLowerCase() == "image")return request.body;
      else if (category.toLowerCase() == "json") return request.json();
      else return request;

    } catch (err) {
      throw err;
    }
  }
};
