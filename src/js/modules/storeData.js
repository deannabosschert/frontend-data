const storeData = {
  set(data, source) {
    console.log("adding data to localStorage")
    localStorage.setItem(source, JSON.stringify(data))
    return data
  },
  get(source) {
    console.log("getting data from localStorage")
    const data = JSON.parse(localStorage.getItem(source))
    return data
  }
}
export {
  storeData
}