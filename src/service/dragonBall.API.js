import axios from "axios";

export const fetchDragonBallAPI = async () => {
  try {
    const apiResponse = await axios.get("http://localhost:3030/");
     return apiResponse.data.charactersData
  } catch (e) {
    console.log("Error while fetching API in Service", e.message);
  }
};
