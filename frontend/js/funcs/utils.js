const showSwal = (title, icon, confirmButtonText, callback) => {
  Swal.fire({
    icon,
    title,
    confirmButtonText,
  }).then((result) => callback(result));
};
const saveIntoLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
const getFromLocalStorage = (key) => {
  return JSON.stringify(localStorage.getItem(key));
};
const getToken = () => {
  const userInfos = JSON.parse(localStorage.getItem("user"));
  return userInfos ? userInfos.token : null;
};
const isLogin = () => {
  const userInfos = localStorage.getItem("user");
  return !!userInfos;
};
export {
  showSwal,
  saveIntoLocalStorage,
  getFromLocalStorage,
  getToken,
  isLogin,
};
