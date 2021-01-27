import {
  fetcher
} from "./helpers/fetcher.js"
import {
  store
} from "./store.js"

const API = {
  get: () => {
    const query = "figd-gux7" // exitpossibleallday, use this query when switching to fetching data from API
    const limit = 2
    const appToken = 'SAA7itayRYqrmMoM3qmGRtbR5'
    const parkingopenurl = `https://opendata.rdw.nl/resource/${query}.json?$limit=${limit}&$$app_token=${appToken}`

    return new Promise((resolve, reject) => {
      fetcher.get(parkingopenurl)
        .then(res => store.set(res))
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