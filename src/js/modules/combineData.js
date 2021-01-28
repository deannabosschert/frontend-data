export function combineData(parkingOpen_1, parkingTijdvak_2, gebiedRegeling_3) {
  return new Promise((resolve, reject) => {
    const POandGR = gebiedRegeling_3.map(regeling => {
      for (let parking of parkingOpen_1) {
        if (parking.AreaId == regeling.AreaId && parking.AreaManagerId == regeling.AreaManagerId) {
          return {
            OpenAllYear: parking.OpenAllYear,
            ExitPossibleAllDay: parking.ExitPossibleAllDay
          }
        }
        return {
          AreaId: regeling.AreaId,
          AreaManagerId: regeling.AreaManagerId,
          RegulationId: regeling.RegulationId,
          OpenAllYear: parking.OpenAllYear,
          ExitPossibleAllDay: parking.ExitPossibleAllDay
        }
      }
    })

    const allData = parkingTijdvak_2.map(regeling => {
      for (let result of POandGR) {
        if (result.AreaManagerId == regeling.AreaManagerId && result.RegulationId == regeling.RegulationId) {
          return {
            AreaId: result.AreaId,
            AreaManagerId: regeling.AreaManagerId,
            RegulationId: regeling.RegulationId,
            OpenAllYear: result.OpenAllYear,
            ExitPossibleAllDay: result.ExitPossibleAllDay,
            StartDateTimeFrame: regeling.StartDateTimeFrame,
            EndDateTimeFrame: regeling.EndDateTimeFrame,
            DayTimeFrame: regeling.DayTimeFrame,
            FareCalculationCode: regeling.FareCalculationCode,
            MinParkingInterruption: regeling.MinParkingInterruption,
            StartTimeTimeFrame: regeling.StartTimeTimeFrame,
            EndTimeTimeFrame: regeling.EndTimeTimeFrame
          }
        }
        return {
          AreaId: result.AreaId,
          AreaManagerId: regeling.AreaManagerId,
          RegulationId: regeling.RegulationId,
          OpenAllYear: result.OpenAllYear,
          ExitPossibleAllDay: result.ExitPossibleAllDay,
          AreaManagerId: regeling.AreaManagerId,
          RegulationId: regeling.RegulationId,
          StartDateTimeFrame: regeling.StartDateTimeFrame,
          EndDateTimeFrame: regeling.EndDateTimeFrame,
          DayTimeFrame: regeling.DayTimeFrame,
          FareCalculationCode: regeling.FareCalculationCode,
          MinParkingInterruption: regeling.MinParkingInterruption,
          StartTimeTimeFrame: regeling.StartTimeTimeFrame,
          EndTimeTimeFrame: regeling.EndTimeTimeFrame
        }
      }
    })
    resolve(allData)
  })
}
