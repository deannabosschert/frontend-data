import {
  queries
} from "./adds/queries.js"
import {
  store
} from "./store.js"

const API = {
  get: () => {
    const query = queries.api.exitpossibleallday
    const appToken = 'SAA7itayRYqrmMoM3qmGRtbR5'
    const parkingopenurl = `https://opendata.rdw.nl/resource/${query}.json?&$$app_token=${appToken}`
    const source = queries.local.parkingOpen
    return new Promise((resolve, reject) => {
      d3.json(source)
        // .then(res => store.set(res))
        .then(data => {
          // console.log(data)
          resolve(data)
          // return data
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