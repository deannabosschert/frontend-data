export function checkOpeningTimes(allData) {
  function unsafeStartTime(data) {
    if (data.StartTimeTimeFrame < 430 || data.StartTimeTimeFrame > 2100) {
      return data;
    }
  }
  function unsafeEndTime(data) {
    if (data.EndTimeTimeFrame < 430 || data.EndTimeTimeFrame > 2100) {
      return data;
    }
  }
  return {
    "start": allData.filter(unsafeStartTime),
    "end": allData.filter(unsafeEndTime)
  }
}