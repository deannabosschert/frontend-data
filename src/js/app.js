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
      .then(data => checkOpeningTimes(data))

        .then(data => renderGraph.barz(data))
        .then(() => loadingState(''))
    } catch (err) {
      console.error(err)
    }
  })()
})()

function checkOpeningTimes(allData) {
  const avondklokStart = 2100;
  const avondklokEind = 430;
  // AreaId: result.AreaId,
  // AreaManagerId: regeling.AreaManagerId,
  // RegulationId: regeling.RegulationId,
  // OpenAllYear: result.OpenAllYear,
  // ExitPossibleAllDay: result.ExitPossibleAllDay,
  // AreaManagerId: regeling.AreaManagerId,
  // RegulationId: regeling.RegulationId,
  // StartDateTimeFrame: regeling.StartDateTimeFrame,
  // EndDateTimeFrame: regeling.EndDateTimeFrame,
  // DayTimeFrame: regeling.DayTimeFrame,
  // FareCalculationCode: regeling.FareCalculationCode,
  // MinParkingInterruption: regeling.MinParkingInterruption,
  // StartTimeTimeFrame: regeling.StartTimeTimeFrame,
  // EndTimeTimeFrame: regeling.EndTimeTimeFrame
  const cleanData = allData.map(data => {
    return {
    "day": data.DayTimeFrame,
    "start": data.StartTimeTimeFrame,
    "end": data.EndTimeTimeFrame
    }
  })

  const begintijdVoor430 = "ff"
  const begintijdNa2100 = "fff"

  const eindtijdNa2100 = "ffff"
  const eindtijdVoor430 = "fff"
  // basically voor beide; ertussen.
  
//   const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

function unsafeStartTime(data) {
  if (data.StartTimeTimeFrame < 430 || data.StartTimeTimeFrame > 2100) {
    return data
  }
}

function unsafeEndTime(data) {
  if (data.EndTimeTimeFrame < 430 || data.EndTimeTimeFrame > 2100) {
    return data
  }
}
const unsafeStarts = allData.filter(unsafeStartTime);
const unsafeEnds = allData.filter(unsafeEndTime);

console.log(unsafeStarts)
console.log(unsafeEnds)

const unsafeTimes = {
  "start": unsafeStarts,
  "end": unsafeEnds
}

  return unsafeTimes
}