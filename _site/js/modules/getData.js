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
      const source = queries.local[query];
      // if (window.localStorage.getItem("rdwData") === null) {
      // console.log("nog geen data in je localStorage, incoming!")
      const data = API.get(source)
      resolve(data)
      // } else {
      //   console.log("nu zit er (wel) data in je localStorage 🤓")
      //   const data = API.local()
      //   resolve(data)
      // }
    })
  }
}


export {
  getData
}