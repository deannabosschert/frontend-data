import {unsafeStartTime} from './lib/check-unsafe-starttime.js'
import { unsafeEndTime } from "./lib/check-unsafe-endtime.js"

export async function sortData(data) {
  return data.reduce(({start, end, both},curr) => ({
    start: unsafeStartTime(curr) ?  {
      ...start, //alle elementen includen
      [curr.AreaManagerDesc]: start[curr.AreaManagerDesc] ? start[curr.AreaManagerDesc] + 1 : 1 // wanneer de stad voorkomt in de data, doe dan +1. 
    } : start,
    end: unsafeEndTime(curr) ?  {
      ...end,
      [curr.AreaManagerDesc]: end[curr.AreaManagerDesc] ? end[curr.AreaManagerDesc] + 1 : 1
    } : end,
    both: (unsafeStartTime(curr) && unsafeEndTime(curr)) ?  {
      ...both,
      [curr.AreaManagerDesc]: both[curr.AreaManagerDesc] ? both[curr.AreaManagerDesc] + 1 : 1
    } : both,
   
  }), {start: {}, end: {}, both: {}})
}

export async function filterTopTwenty({start, end, both}) {
  return {
    start: Object.entries(start).sort((a, b) => a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0).slice(0, 20).reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {}),
    end: Object.entries(end).sort((a, b) => a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0).slice(0, 20).reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {}),
    both: Object.entries(both).sort((a, b) => a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0).slice(0, 20).reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {})
  }
}