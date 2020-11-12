import {apiUrl} from "../helpers/VarHelper";
import {getToken} from "./AuthService";
const headers = {
    'Content-Type': 'application/json',
};

export async function getAllJobs() {
    const urlData = apiUrl + "/jobs/all";
    const token = getToken();
    try {
        let response = await fetch(urlData, {
            method: "POST",
            headers:headers,
            body:JSON.stringify({
                token: token
            })
        });
        const status = response.status;
        const responseJson = await response.json();
        return {
            status: status,
            response: responseJson
        };

    } catch (error) {

        return {
            status: 404,
            response: null
        };
    }
}

export async function getMyPublishJobs() {
    const urlData = apiUrl + "/jobs/mine";
    const token = getToken();
    console.log("token", token);
    try {
        let response = await fetch(urlData, {
            method: "POST",
            headers:headers,
            body:JSON.stringify({
                token: token
            })
        });
        //console.log("response",response);
        const status = response.status;
        const responseJson = await response.json();
        return {
            status: status,
            response: responseJson
        };

    } catch (error) {
        console.log("error", error);
        return {
            status: 404,
            response: null
        };
    }
}

export async function createJob(job = null) {
    const urlData = apiUrl + "/jobs/create";
    try {
        const token = getToken();
        job.token = token;
        let newJob = job || {
            title:"Trabajo Random",
            amount: 34.00,
            address: "Avenida siempre viva",
            description: "",
        };

        let response = await fetch(urlData, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(newJob)
        });
        const status = response.status;
        const responseJson = await response.json();
        return {
            status: status,
            response: responseJson
        };

    } catch (error) {
        return {
            status: 404,
            response: null
        };
    }
}

export async function updateJob(job) {
    const urlData = apiUrl + "/jobs/update";
    try {
        const token = getToken();
        let response = await fetch(urlData, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                token: token,
                data: job
            })
        });
        const status = response.status;
        const responseJson = await response.json();
        return {
            status: status,
            response: responseJson
        };

    } catch (error) {
        return {
            status: 404,
            response: null
        };
    }
}
