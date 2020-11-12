import {apiUrl} from "../helpers/VarHelper";
import {
    get_key,
    remove_key,
    storage_key,
    STORAGE_KEY_TOKEN, STORAGE_KEY_USER_INFO
} from "../helpers/StorageHelper";

const headers = {
    'Content-Type': 'application/json',
};

export async function login(email,password) {
    const urlData = apiUrl + "/user/login";
    try {
        let response = await fetch(urlData, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                email: email,
                password: password
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

export async function register(user) {
    const urlData = apiUrl + "/user/register";
    try {
        let response = await fetch(urlData, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(user)
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

export async function getUserInfoById(userId){
    const urlData = apiUrl + "/user/info/"+userId;
    try {
        let response = await fetch(urlData, {
            method: "GET"
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

export function storageToken(token) {
    return storage_key(STORAGE_KEY_TOKEN,token);
}

export function getToken() {
    return get_key(STORAGE_KEY_TOKEN);
}

export function removeToken(){
    return remove_key(STORAGE_KEY_TOKEN);
}

export function storageUserInfo(userInfo){
    return storage_key(STORAGE_KEY_USER_INFO, userInfo);
}

export function getUserInfo(){
    return get_key(STORAGE_KEY_USER_INFO);
}
export function isAuthenticated(){
    return !!getToken();
}
