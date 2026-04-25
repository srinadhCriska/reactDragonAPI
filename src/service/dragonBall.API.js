import axios from "axios";

export const fetchDragonBallAPI = async () => {
  try {
    const apiResponse = await axios.get("http://localhost:3030/");
    console.log(apiResponse);
    return apiResponse.data.charData;
  } catch (e) {
    console.log("Error while fetching API in Service", e.message);
  }
};

export const fetchPlanetsAPI = async () => {
  try {
    const planetsAPIRes = await axios.get("http://localhost:3030/planetsData");
    return planetsAPIRes.data.items;
  } catch (e) {
    console.log("Error at fetching planetsAPI in Service", e.message);
  }
};
