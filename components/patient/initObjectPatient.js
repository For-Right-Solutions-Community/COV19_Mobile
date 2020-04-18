export function getInitialDataPatient() {
    return {
    firstname: "",
    lastname: "",
    cin: "",
    phone: "",
    backup_phone: "",
    email: "",
    age: 0,
    weight: 0,
    height: 0,
    gender: "",
    civilStatus: "",
    liveAlone: false,
    liveWithFamily: false,
    fmailySize: 1,
    runningWater: false,
    hotWater: false,
    sewageDisposal: false,
    singleRoom: false,
    physicalHandicap: false,
    intellecHandicap: false,
    visitedCountry: "",
    countryPersonReturningFromTrip: "",
    sameHomePersonReturningFromTrip: false,
    covidTestResult: "",
    address: {
      state: "",
      avenue: ""
    },
    location: {
      lat: 0,
      lng: 0
    },
    antecedentRecord: {},
    exposure: {
      visitedCoutry: "Tunisie",
      contactWithTraveler: false,
      sameHomePersonReturningFromTrip: false,
      countryPersonReturningFromTrip: "",
      contactedTravellerTestResult: false,
      visitedRegion: "",
      visitDate: new Date(),
      contactWithInfectedPerson: false,
      visited_regwithSuspiciousGroupion: false
    }
  }
  }