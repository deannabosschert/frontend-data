export async function combineData(parkingOpen, parkingTijdvak, gebiedRegeling, gebiedLocatie) {
  return gebiedRegeling.map(regeling => {
    const open = parkingOpen.find(d => d.AreaId == regeling.AreaId && d.AreaManagerId == regeling.AreaManagerId)
    const tijdvak = parkingTijdvak.find(d => regeling.AreaManagerId == d.AreaManagerId && regeling.RegulationId == d.RegulationId)
    const gLocatie = gebiedLocatie.find(d => regeling.AreaManagerId == d.AreaManagerId)
    let newRegeling = {
      AreaId: regeling.AreaId,
      AreaManagerId: regeling.AreaManagerId,
      RegulationId: regeling.RegulationId,
    }

    if (open) newRegeling = {
      ...newRegeling,
      OpenAllYear: open.OpenAllYear,
      ExitPossibleAllDay: open.ExitPossibleAllDay,
    }
    if (tijdvak) newRegeling = {
      ...newRegeling,
      StartDateTimeFrame: tijdvak.StartDateTimeFrame,
      EndDateTimeFrame: tijdvak.EndDateTimeFrame,
      DayTimeFrame: tijdvak.DayTimeFrame,
      FareCalculationCode: tijdvak.FareCalculationCode,
      MinParkingInterruption: tijdvak.MinParkingInterruption,
      StartTimeTimeFrame: tijdvak.StartTimeTimeFrame,
      EndTimeTimeFrame: tijdvak.EndTimeTimeFrame
    }
    if (gLocatie) newRegeling = {
      ...newRegeling,
      AreaManagerDesc: gLocatie.AreaManagerDesc.split(' ')[0],
    }
    return newRegeling

  })
}