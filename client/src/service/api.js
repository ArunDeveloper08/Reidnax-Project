import axios from "axios";


export const getData = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`);
    return response.data; 
  } catch (error) {
    console.error("Error in fetching data:", error);
    throw error; 
  }


};
