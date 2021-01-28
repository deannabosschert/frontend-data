const storeData = {
  set(data) {
    console.log(data)
    console.log("adding rdwData to localStorage")
    localStorage.setItem("rdwData", JSON.stringify(data))
    return data
  },
  get() {
    console.log("getting rdwData from localStorage")
    const rdwData = JSON.parse(localStorage.getItem("rdwData"))
    return rdwData
  }
}
export {
  storeData
}