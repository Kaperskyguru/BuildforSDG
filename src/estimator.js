const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};

  impact.currectlyInfected = data.reportedCases * 10;

  impact.infectionsByRequestedTime = impact.currectlyInfected * 1024;

  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;

  impact.hospitalBedsByRequestedTime = Math.floor(data.totalHospitalBeds * 0.35) - impact.severeCasesByRequestedTime;

  severeImpact.currentlyInfected = data.reportedCases * 50;

  severeImpact.infectionsByRequestedTime = severeImpact.currectlyInfected * 1024;

  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.15;

  severeImpact.hospitalBedsByRequestedTime = Math.floor(data.totalHospitalBeds * 0.35) - severeImpact.severeCasesByRequestedTime;

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
