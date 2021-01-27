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

let renderData;



(function init() {
  (async () => {
    loadingState('active')

    // eerst async de drie datasets getten en cleanen, dan renderen.
    try {
      const cleanData1 = await getData.parking("parkingOpen") // wait for parking-open data
        .then(data => mapDataPO(data)) // clean data
        .then(data => exitNotPossible(data)) // filter data
        .then(data => checkOpeningTimes(data)) // filter data 2
        .then(data => seeArrayLength(data));

      const cleanData2 = await getData.parking("parkingTijdvak") // wait for tijdvak data
      .then(data => mapDataTV(data)) // clean data
      .then(data => seeArrayLength(data));
      
      const cleanData3 = await getData.parking("gebiedRegeling") // wait for gebied-regeling data
      .then(data => mapDataGR(data)) // clean data
      .then(data => seeArrayLength(data));
      


      return renderData = await combineData(cleanData1, cleanData2, cleanData3)  // collect previous data, then render graphs.
      .then(data => renderGraph.barz(data))
        .then(() => loadingState(''));


    } catch (err) {
      console.error(err)
    }
  })()
})()

function combineData(cleanData1, cleanData2, cleanData3) {
  return new Promise((resolve, reject) => {
  const data = {
    parkingOpen: cleanData1,
    parkingTijdvak: cleanData2,
    gebiedRegeling: cleanData3
  }

  resolve(data)
})

}




function checkOpeningTimes(data) {
  console.log(data)
  return data

  // console.log("Retrieved " + data.length + " records.")
  // console.log(data)
  // // const result = data.filter(item => item.AreaId == openingstijdenurl.AreaId)
  // const datatoo = openingstijdenurl
  // const result = datatoo.filter(item => item.AreaId == "796_PRVLI")
  // console.log(result)
  // "AreaManagerId": 268,
  // "AreaId": "268_KELFKB",
  // let areaId = item.AreaId
  //
  //
  //   if (locatie.AreaId == "796_PRVLI" && item.AreaId == "796_PRVLI") {
  //     return {
  //       AreaId: locatie.AreaId,
  //       AreaManagerId: locatie.AreaManagerId,
  //       Days: locatie.Days,
  //       EnterFrom: locatie.EnterFrom,
  //       EnterUntil: locatie.EnterUntil
  //     }
  //
  //
  //   console.log("Retrieved " + dingen.length + " records.")
  // }


  // return dingen
}