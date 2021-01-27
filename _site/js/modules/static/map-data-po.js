export function mapDataPO(data) {
  return data.map(item => ({
    AreaId: item.AreaId,
    AreaManagerId: item.AreaManagerId,
    OpenAllYear: item.OpenAllYear,
    ExitPossibleAllDay: item.ExitPossibleAllDay
  }));
}
