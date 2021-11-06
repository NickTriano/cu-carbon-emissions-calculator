// default ECMS from CU-EnergyMasterPlanPresentationCalculations-20210601.xlsx in Facilities Repository, as of 10/30/21
// and from Oliver Zhang's thesis ()
// based on assumptions of savings allocated to electricity or natural gas
const default_ecms = [{
    name: 'Lab Heat Recovery',
    electricity: 0,
    gas: 3276219 // 174 tCO2e 3276219*0.00005311
  },
  {
    name: 'Heat Pump',
    electricity: 0,
    gas: 5554510 // 295 tCO2e 5554510*0.00005311
  },
  // {
  //   name: 'Improved Cogen Heat Recovery',
  //   electricity: 720275, // 61 tCO2e split or just all gas? 142
  //   gas: 1882885 // 100 tCO2e 1882885*0.00005311
  // },
  {
    name: 'Optimized Controls',
    electricity: 140/0.000288962*3.412, // 61 tCO2e split or just all gas? 140/0.000288962*3.412
    gas: 2/0.00005311 // 2 tCO2e 2/0.00005311
  },
  {
    name: 'CW Supply Temp Reset',
    electricity: 429930, // 126,000 kWh/year
    gas: 0
  }];

export {default_ecms};