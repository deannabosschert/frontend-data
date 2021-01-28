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
      const parkingOpen_1 = await getData.parking("parkingOpen") // wait for parking-open data
        .then(data => mapDataPO(data)) // clean data
        .then(data => exitNotPossible(data)) // filter data
        .then(data => checkOpeningTimes(data)) // filter data 2
        .then(data => seeArrayLength(data));

      const parkingTijdvak_2 = await getData.parking("parkingTijdvak") // wait for tijdvak data
        .then(data => mapDataTV(data)) // clean data
        .then(data => seeArrayLength(data));

      const gebiedRegeling_3 = await getData.parking("gebiedRegeling") // wait for gebied-regeling data
        .then(data => mapDataGR(data)) // clean data
        .then(data => seeArrayLength(data));



      return renderData = await combineData(parkingOpen_1, parkingTijdvak_2, gebiedRegeling_3) // collect previous data, then render graphs.
        .then(data => renderGraph.barz(data))
        .then(() => loadingState(''));


    } catch (err) {
      console.error(err)
    }
  })()
})()

function combineData(parkingOpen_1, parkingTijdvak_2, gebiedRegeling_3) {
  // console.log(parkingOpen_1) // 127 records
  // console.log(gebiedRegeling_3[800]) // 12276 records


  const results = gebiedRegeling_3.map(regeling => {
    for (let parking of parkingOpen_1) {
      if (parking.AreaId == regeling.AreaId && parking.AreaManagerId == regeling.AreaManagerId) {
        return {
          OpenAllYear: parking.OpenAllYear,
          ExitPossibleAllDay: parking.ExitPossibleAllDay
        }
      }
      const parkingData = {
        AreaId: regeling.AreaId,
        AreaManagerId: regeling.AreaManagerId,
        RegulationId: regeling.RegulationId,
        OpenAllYear: parking.OpenAllYear,
        ExitPossibleAllDay: parking.ExitPossibleAllDay
      }

      return parkingData
    }
  })

  const result2 = results.map(regeling => {
    for (let tijdvak of parkingTijdvak_2) {
      if (tijdvak.AreaManagerId == regeling.AreaManagerId) {
        return {
          AreaId: regeling.AreaId,
          AreaManagerId: regeling.AreaManagerId,
          RegulationId: regeling.RegulationId
        }
      }
      const tijdvakData = {
        AreaId: regeling.AreaId,
        AreaManagerId: regeling.AreaManagerId,
        RegulationId: regeling.RegulationId,
        OpenAllYear: regeling.OpenAllYear,
        ExitPossibleAllDay: regeling.ExitPossibleAllDay
      }

      return tijdvakData
    }
  })

  const result3 = parkingTijdvak_2.map(regeling => { ///deze doen aangezien deze set de meeste data bevat en herhalende id's heeft ivm dagen vd week
    for (let result of results) {
      if (result.AreaManagerId == regeling.AreaManagerId && result.RegulationId == regeling.RegulationId) {
        return {
          AreaId: result.AreaId,
          AreaManagerId: regeling.AreaManagerId,
          RegulationId: regeling.RegulationId,
          OpenAllYear: result.OpenAllYear,
          ExitPossibleAllDay: result.ExitPossibleAllDay,
          StartDateTimeFrame: regeling.StartDateTimeFrame,
          EndDateTimeFrame: regeling.EndDateTimeFrame,
          DayTimeFrame: regeling.DayTimeFrame,
          FareCalculationCode: regeling.FareCalculationCode,
          MinParkingInterruption: regeling.MinParkingInterruption,
          StartTimeTimeFrame: regeling.StartTimeTimeFrame,
          EndTimeTimeFrame: regeling.EndTimeTimeFrame
        }
      }
      const tijdvakData = {
        AreaId: result.AreaId,
        AreaManagerId: regeling.AreaManagerId,
        RegulationId: regeling.RegulationId,
        OpenAllYear: result.OpenAllYear,
        ExitPossibleAllDay: result.ExitPossibleAllDay,
        AreaManagerId: regeling.AreaManagerId,
        RegulationId: regeling.RegulationId,
        StartDateTimeFrame: regeling.StartDateTimeFrame,
        EndDateTimeFrame: regeling.EndDateTimeFrame,
        DayTimeFrame: regeling.DayTimeFrame,
        FareCalculationCode: regeling.FareCalculationCode,
        MinParkingInterruption: regeling.MinParkingInterruption,
        StartTimeTimeFrame: regeling.StartTimeTimeFrame,
        EndTimeTimeFrame: regeling.EndTimeTimeFrame
      }

      return tijdvakData
    }
  })
  
  console.log(results)
  console.log(result2)
  console.log(result3)

  // console.log(gebiedRegeling_3)
  // const matches = gebiedRegeling_3.map(ding => {
  //   let managerID = ding.AreaManagerId
  //   let selfID = ding.AreaId

  //   for (item of parkingOpen_1) {
  //     if (item.AreaID == selfID || item.AreaManagerId == managerID) {
  //       return {
  //         AreaID: item.selfID,
  //         AreaManagerId: item.managerID,
  //         OpenAllYear: item.OpenAllYear,
  //         ExitPossibleAllDay: item.ExitPossibleAllDay
  //       }
  //     }
  //     return {
  //       AreaID: ding.AreaID,
  //       AreaManagerId: ding.AreaManagerId,
  //       OpenAllYear: ding.OpenAllYear,
  //       ExitPossibleAllDay: ding.ExitPossibleAllDay}  
  //     }})
  // console.log(matches[0])
  // console.log(matches[1])
  // console.log(matches[2])
  // console.log(matches[3])
  // console.log(matches[4])




  return new Promise((resolve, reject) => {
    const data = {
      parkingOpen: parkingOpen_1,
      parkingTijdvak: parkingTijdvak_2,
      gebiedRegeling: gebiedRegeling_3
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