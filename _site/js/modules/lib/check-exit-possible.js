export function exitNotPossible(data) {
  return data.filter(item => item.ExitPossibleAllDay == 0)
}
