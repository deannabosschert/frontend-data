import {
  API
} from "./API.js"

const getData = {
    parking: () => {
      return new Promise((resolve, reject) => {
        // if (window.localStorage.getItem("rdwData") === null) {
          console.log("nog geen data in je localStorage, incoming!")
          const rdwData = API.get()
          resolve(rdwData)
          return rdwData
        // } else {
        //   console.log("nu zit er (wel) data in je localStorage 🤓")
        //   const rdwData = API.local()
        //   resolve(rdwData)
        //   return rdwData
        // }
      })
}}


export {
  getData
}