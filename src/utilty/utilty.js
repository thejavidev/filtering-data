export const setLocal = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data))
}
export const getLocal = (name) => {
   return localStorage.getItem(name) && JSON.parse(localStorage.getItem(name))
}