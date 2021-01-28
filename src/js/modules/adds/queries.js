// RDW OpenData-links and corresponding local datasets.
const queries = {
  api: {
    parkingOpen: "figd-gux7",
    parkingTijdvak: "ixf8-gtwq",
    gebiedRegeling: "qtex-qwd8",
    gebiedLocatie: "2uc2-nnv3"
  },
  local: {
    parkingOpen: "./_data/datasets/Open_Data_Parkeren__PARKING_OPEN.json",
    parkingTijdvak: "./_data/datasets/Open_Data_Parkeren__TIJDVAK.json",
    gebiedRegeling: "./_data/datasets/Open_Data_Parkeren__GEBIED_REGELING.json",
    gebiedLocatie: "./_data/datasets/Open_Data_Parkeren__GEBIED_LOCATIE.json"
  }
}

export {
  queries
}