import {
  API
} from "./API.js"

import {
  queries
} from "./adds/queries.js"

const getData = {
    parking: (query) => {
      return new Promise((resolve, reject) => {
        console.log(query)
        // const source = queries.local.parkingOpen
        const source = queries.local[query]


        // if (window.localStorage.getItem("rdwData") === null) {
          // console.log("nog geen data in je localStorage, incoming!")
          const rdwData = API.get(source)
          resolve(rdwData)
          // return rdwData
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