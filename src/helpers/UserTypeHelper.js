import { get_key, storage_key } from "./StorageHelper";

const STORAGE_KEY_USER_TYPE = "@userType";
const validTypes = ["employer", "collaborator"];

export const initUserType = () => {
  const userType = getUserType();
  if (!userType) {
    setUserType("collaborator");
  }
};

export const setUserType = (type) => {
  const selectType = validTypes.includes(type) ? type : "collaborator";
  storage_key(STORAGE_KEY_USER_TYPE, selectType);
};

export const getUserType = () => {
  return get_key(STORAGE_KEY_USER_TYPE) || "employer";
};

export const swapUserType = () => {
  const current = getUserType();
  if (current === "employer") {
    setUserType("collaborator");
  } else {
    setUserType("employer");
  }
};
