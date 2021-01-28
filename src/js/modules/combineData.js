export function combineData(parkingOpen_1, parkingTijdvak_2, gebiedRegeling_3, gebiedLocatie_4) {
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

    const dataSets = parkingTijdvak_2.map(regeling => {
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

    function zelfde(data) {
      for (let element of gebiedLocatie_4) {
        // console.log(element);
     if (data.AreaManagerId == element.AreaManagerId) {
       console.log(element.AreaManagerDesc)
          return {
            AreaManagerId: data.AreaManagerId,
            AreaManagerDesc: element.AreaManagerDesc
          }
        }
        const nieuw = {
          AreaManagerId: data.AreaManagerId,
          AreaManagerDesc: element.AreaManagerDesc

        }

        return nieuw
      }

    }
    const allData = dataSets.filter(zelfde)
    console.log(allData)

    // const allData = dataSets.filter(regeling => {
    //   for (let result of gebiedLocatie_4) {
    //     // if (regeling.AreaManagerId) {
    //       console.log(result.AreaManagerId)
    //       // return {
    //       //   AreaId: regeling.AreaId,
    //       //   AreaManagerId: regeling.AreaManagerId,
    //       //   AreaManagerDesc: result.AreaManagerDesc,
    //       //   RegulationId: regeling.RegulationId,
    //       //   OpenAllYear: regeling.OpenAllYear,
    //       //   ExitPossibleAllDay: regeling.ExitPossibleAllDay,
    //       //   StartDateTimeFrame: regeling.StartDateTimeFrame,
    //       //   EndDateTimeFrame: regeling.EndDateTimeFrame,
    //       //   DayTimeFrame: regeling.DayTimeFrame,
    //       //   FareCalculationCode: regeling.FareCalculationCode,
    //       //   MinParkingInterruption: regeling.MinParkingInterruption,
    //       //   StartTimeTimeFrame: regeling.StartTimeTimeFrame,
    //       //   EndTimeTimeFrame: regeling.EndTimeTimeFrame
    //       // }
    //     // }
    //     // return {
    //     //   AreaId: regeling.AreaId,
    //     //   AreaManagerId: regeling.AreaManagerId,
    //     //   AreaManagerDesc: result.AreaManagerDesc,
    //     //   RegulationId: regeling.RegulationId,
    //     //   OpenAllYear: regeling.OpenAllYear,
    //     //   ExitPossibleAllDay: regeling.ExitPossibleAllDay,
    //     //   AreaManagerId: regeling.AreaManagerId,
    //     //   RegulationId: regeling.RegulationId,
    //     //   StartDateTimeFrame: regeling.StartDateTimeFrame,
    //     //   EndDateTimeFrame: regeling.EndDateTimeFrame,
    //     //   DayTimeFrame: regeling.DayTimeFrame,
    //     //   FareCalculationCode: regeling.FareCalculationCode,
    //     //   MinParkingInterruption: regeling.MinParkingInterruption,
    //     //   StartTimeTimeFrame: regeling.StartTimeTimeFrame,
    //     //   EndTimeTimeFrame: regeling.EndTimeTimeFrame
    //     // }
    //   }
    // })

    // console.log(allData)
    resolve(allData)
  })
}