export function unsafeStartTime(data) {
  if (data.StartTimeTimeFrame < 430 || data.StartTimeTimeFrame > 2100) {
    return data
  }
}
