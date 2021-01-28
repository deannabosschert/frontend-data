export function unsafeTime(data, variable) {
  console.log(variable)
  if (data[variable] < 430 || data.StartTimeTimeFrame > 2100) {
    return data;
  }
}
