import {
  getData
} from "./modules/getData.js"
import {
  loadingState
} from "./modules/adds/loader.js"
import {
  renderGraph
} from "./modules/renderGraph.js"
import {
  exitNotPossible
} from "./modules/lib/check-exit-possible.js"
import {
  seeArrayLength
} from "./modules/lib/see-array-length.js"
import {
  mapDataPO
} from "./modules/static/map-data-po.js"
import {
  mapDataTV
} from "./modules/static/map-data-tv.js"
import {
  mapDataGR
} from "./modules/static/map-data-gr.js"
import {
  combineData
} from "./modules/combineData.js"
import {
  cleanData
} from "./modules/cleanData.js"
let renderData

(function init() {
  (async () => {
    loadingState('active')
    try {
      const parkingOpen_1 = await getData.parking("parkingOpen")
        .then(data => mapDataPO(data))
        .then(data => exitNotPossible(data))
        .then(data => seeArrayLength(data))

      const parkingTijdvak_2 = await getData.parking("parkingTijdvak")
        .then(data => mapDataTV(data))
        .then(data => seeArrayLength(data))

      const gebiedRegeling_3 = await getData.parking("gebiedRegeling")
        .then(data => mapDataGR(data))
        .then(data => seeArrayLength(data))

      return renderData = await combineData(parkingOpen_1, parkingTijdvak_2, gebiedRegeling_3)
        .then(data => cleanData(data))
        .then(data => renderGraph.barz(data))
        .then(() => loadingState(''))
    } catch (err) {
      console.error(err)
    }
  })()
})()