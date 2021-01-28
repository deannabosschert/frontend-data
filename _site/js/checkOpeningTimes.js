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
  const unsafeStarts = allData.filter(unsafeStartTime);
  const unsafeEnds = allData.filter(unsafeEndTime);

  console.log(unsafeStarts);
  console.log(unsafeEnds);

  const unsafeTimes = {
    "start": unsafeStarts,
    "end": unsafeEnds
  };

  return unsafeTimes;
}
