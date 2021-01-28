import { unsafeStartTime } from "./lib/check-unsafe-starttime.js"
import { unsafeEndTime } from "./lib/check-unsafe-endtime.js"

export function cleanData(allData) {
  const timeData = {
    "start": allData.filter(unsafeStartTime),
    "end": allData.filter(unsafeEndTime)
  }
  // console.table(timeData.start)
  

  return timeData
}


// bar chart: hoeveelheid per locatie
// pie chart daarvan hoeveel dagen vd week