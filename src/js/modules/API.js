import {
  store
} from "./store.js"


const API = {
  get: (source) => {
    // const query = queries.api.parkingOpen
    // const appToken = 'SAA7itayRYqrmMoM3qmGRtbR5'
    // const parkingopenurl = `https://opendata.rdw.nl/resource/${query}.json?&$$app_token=${appToken}`
    return new Promise((resolve, reject) => {
      d3.json(source)
        // .then(res => store.set(res))
        .then(data => {
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