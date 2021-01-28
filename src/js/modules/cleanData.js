import { unsafeStartTime } from "./lib/check-unsafe-starttime.js"
import { unsafeEndTime } from "./lib/check-unsafe-endtime.js"

export function cleanData(allData) {
   return {
    "start": allData.filter(unsafeStartTime),
    "end": allData.filter(unsafeEndTime)
  } 
}