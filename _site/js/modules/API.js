import {
  fetcher
} from "./adds/fetcher.js"
import {
  queries
} from "./adds/queries.js"
import {
  store
} from "./store.js"
// import {
//   parkingData
// } from "../../_data/datasets/Open_Data_Parkeren__PARKING_OPEN.js"


const API = {
  get: () => {
    const query = queries.exitpossibleallday
    const appToken = 'SAA7itayRYqrmMoM3qmGRtbR5'
    const parkingopenurl = `https://opendata.rdw.nl/resource/${query}.json?&$$app_token=${appToken}`
   
    return new Promise((resolve, reject) => {
      d3.json(parkingopenurl)
        // .then(res => store.set(res))
        .then(data => {
          console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(console.log(err))
        })
    })
  },
  local: () => {
    const data = store.get()
    console.log(data)
    return data
  }
}

export {
  API
}