import {
  getData
} from "./modules/getData.js"
import {
  loadingState
} from "./modules/adds/loader.js"
import {
  renderGraph
} from "./modules/renderGraph.js"
let renderData;



(function init() {
  (async () => {
    loadingState('active')

    // eerst async de drie datasets getten en cleanen, dan renderen.
    try {
      const cleanData1 = await getData.parking("parkingOpen") // wait for parking-open data
        .then(data => mapData(data)) // clean data
        .then(data => exitNotPossible(data)) // filter data
        .then(data => checkOpeningTimes(data)) // filter data 2
        .then(data => seeLength(data));

      const cleanData2 = await getData.parking("parkingTijdvak") // wait for tijdvak data
      .then(data => seeLength(data));
      
      const cleanData3 = await getData.parking("gebiedRegeling") // wait for gebied-regeling data
      .then(data => seeLength(data));


      return renderData = await renderGraph.barz(cleanData1, cleanData2, cleanData3) // collect previous data, then render graphs.
        .then(() => loadingState(''));


    } catch (err) {
      console.error(err)
    }
  })()
})()


function mapData(data) {
  return data.map(item => ({
    AreaId: item.AreaId,
    AreaManagerId: item.AreaManagerId,
    OpenAllYear: item.OpenAllYear,
    ExitPossibleAllDay: item.ExitPossibleAllDay
  }))
}

function exitNotPossible(data) {
  // console.log("Retrieved " + data.length + " records.")
  return data.filter(item => item.ExitPossibleAllDay == 0)
}

function seeLength(data) {
  console.log("Retrieved " + data.length + " records.")
  return data
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