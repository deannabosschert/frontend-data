export function mapDataTV(data) {
  return data.map(item => ({
    AreaManagerId: item.AreaManagerId,
    RegulationId: item.RegulationId,
    StartDateTimeFrame: item.StartDateTimeFrame,
    EndDateTimeFrame: item.EndDateTimeFrame,
    DayTimeFrame: item.DayTimeFrame,
    FareCalculationCode: item.FareCalculationCode,
    MinParkingInterruption: item.MinParkingInterruption,
    StartTimeTimeFrame: item.StartTimeTimeFrame,
    EndTimeTimeFrame: item.EndTimeTimeFrame
  }))
}
