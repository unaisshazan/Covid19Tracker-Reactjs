const url = "https://covid19.mathdro.id/api";

export const covidData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const proData = {
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
      lastUpdate: data.lastUpdate,
    };

    return proData;
  } catch (error) {
    console.log(error);
  }
};

export const covidCountryData = async () => {
  try {
    const response = await fetch("https://www.trackcorona.live/api/countries");
    const data = await response.json();

    const refineData = data.data.map((confirmedData) => ({
      name: confirmedData.location,
      confirmed: confirmedData.confirmed,
      recovered: confirmedData.recovered,
      deaths: confirmedData.dead,
    }));

    return refineData;
  } catch (error) {
    console.log(error);
  }
};