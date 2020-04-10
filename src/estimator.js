const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {
      currectlyInfected: data.reportedCases * 10,
      infectionsByRequestedTime: impact.currectlyInfected * 1024,
      severeCasesByRequestedTime: impact.infectionsByRequestedTime * 0.15,
      hospitalBedsByRequestedTime:
        Math.floor(data.totalHospitalBeds * 0.35) -
        impact.severeCasesByRequestedTime
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionsByRequestedTime: severeImpact.currectlyInfected * 1024,
      severeCasesByRequestedTime: severeImpact.infectionsByRequestedTime * 0.15,
      hospitalBedsByRequestedTime:
        Math.floor(data.totalHospitalBeds * 0.35) -
        severeImpact.severeCasesByRequestedTime
    }
  };
};

export default covid19ImpactEstimator;
