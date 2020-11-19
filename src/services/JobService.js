import { apiUrl } from "../helpers/VarHelper";
import AuthService from "./AuthService";
const headers = {
  "Content-Type": "application/json",
};

export default class JobService {
  static async getAllJobs() {
    const urlData = apiUrl + "/jobs/all" + AuthService.tokenToParam();
    try {
      let response = await fetch(urlData, {
        method: "GET",
      });
      const status = response.status;
      const responseJson = await response.json();
      return {
        status: status,
        response: responseJson,
      };
    } catch (error) {
      return {
        status: 404,
        response: null,
      };
    }
  }

  static async getJob(id) {
    const urlData = apiUrl + "/jobs/info/" + id + AuthService.tokenToParam();
    try {
      let response = await fetch(urlData, {
        method: "GET",
      });
      const status = response.status;
      const responseJson = await response.json();
      return {
        status: status,
        response: responseJson,
      };
    } catch (error) {
      return {
        status: 404,
        response: null,
      };
    }
  }

  static async getMyPublishJobs() {
    const urlData = apiUrl + "/jobs/mine" + AuthService.tokenToParam();
    try {
      let response = await fetch(urlData, {
        method: "GET",
      });
      //console.log("response",response);
      const status = response.status;
      const responseJson = await response.json();
      return {
        status: status,
        response: responseJson,
      };
    } catch (error) {
      console.log("error", error);
      return {
        status: 404,
        response: null,
      };
    }
  }

  static async createJob(job) {
    const urlData = apiUrl + "/jobs/create" + AuthService.tokenToParam();
    try {
      console.log("job", job);
      if (job === null) {
        throw "Job null";
      }
      let response = await fetch(urlData, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(job),
      });
      const status = response.status;
      const responseJson = await response.json();
      return {
        status: status,
        response: responseJson,
      };
    } catch (error) {
      return {
        status: 404,
        response: null,
      };
    }
  }

  static async updateJob(job) {
    const urlData = apiUrl + "/jobs/update" + AuthService.tokenToParam();
    try {
      let response = await fetch(urlData, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          data: job,
        }),
      });
      const status = response.status;
      const responseJson = await response.json();
      return {
        status: status,
        response: responseJson,
      };
    } catch (error) {
      return {
        status: 404,
        response: null,
      };
    }
  }
}
