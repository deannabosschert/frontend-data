import {
  getData
} from "./modules/getData.js"
import {
  loadingState
} from "./modules/adds/loader.js"
import {
  renderGraph
} from "./modules/renderGraph.js"
let cleanData;



(function init() {
  (async () => {
    loadingState('active')

    // eerst getten en cleanen in deze trycatch, dan renderen.
    try {
      return cleanData = await getData.parking() // wait for data
        .then(data => mapData(data)) // clean data
        .then(data => renderGraph.barz(data)) // render data
        .then(() => loadingState(''))

      return renderData = await renderGraph.barz() // wait for data
        .then(data => mapData(data)) // get usable data
      // .then(data => exitNotPossible(data)) // filter data
      // .then(data => checkOpeningTimes(data))
      // .then(data => renderGraph())
    } catch (err) {
      console.error(err)
    }
  })()
})()

function mapData(data) {
console.log(data)
}

// function mapData(data) {
//   return data.map(item => ({
//     AreaId: item.AreaId,
//     AreaManagerId: item.AreaManagerId,
//     OpenAllYear: item.OpenAllYear,
//     ExitPossibleAllDay: item.ExitPossibleAllDay
//   }))
// }

function exitNotPossible(data) {
  console.log("Retrieved " + data.length + " records.")
  return data.filter(item => item.ExitPossibleAllDay == 0)
}


function checkOpeningTimes(data) {
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