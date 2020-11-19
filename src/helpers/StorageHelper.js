export const STORAGE_KEY_USER_INFO = "@userInfo";
export const STORAGE_KEY_TOKEN = "@tokenSession1";
/* STORAGE FUNCTIONS */
export function storage_key(key, data) {
  const parseData = JSON.stringify(data);
  //console.log("storage_key",key,parseData);
  try {
    localStorage.setItem(key, parseData);
    return true;
  } catch (e) {
    return false;
  }
}

export function get_key(key) {
  try {
    let data = localStorage.getItem(key);
    //console.log("get_key",key,parseData);
    if (data !== null) {
      return JSON.parse(data);
    }
    return null;
  } catch (e) {
    return null;
  }
}

export function remove_key(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}

export async function clean_storage() {
  localStorage.clear();
}
