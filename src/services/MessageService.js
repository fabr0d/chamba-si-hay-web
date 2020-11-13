import {apiUrl} from "../helpers/VarHelper";
const headers = {
    'Content-Type': 'application/json',
};

export async function getMessages(jobId) {
    const urlData = apiUrl + "/messages/all";
    try {
        let response = await fetch(urlData, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                jobId: jobId
            })
        });
        const status = response.status;
        const responseJson = await response.json();
        return {
            status: status,
            data: responseJson,
        };
    } catch (error) {
        return {
            status: 404,
            data: null
        };
    }
}

export async function storeMessage(jobId, message) {
    const urlData = apiUrl + "/messages/store";
    try {
        let response = await fetch(urlData, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                jobId: jobId,
                messageContent: message
            })
        });
        const status = response.status;
        const responseJson = await response.json();
        return {
            status: status,
            data: responseJson,
        };
    } catch (error) {
        return {
            status: 404,
            data: null
        };
    }
}
