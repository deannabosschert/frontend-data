export function mapDataGR(data) {
  return data.map(item => ({
    AreaId: item.AreaId,
    AreaManagerId: item.AreaManagerId,
    RegulationId: item.RegulationId
  }))
}
