import { User } from "../constant.js";

export const getData = async (req, res) => {
  try {
    return res.status(200).send(User);
  } catch (error) {
    console.log("Error in getting data", error);
    return res.status(500).json(error.message);
  }
};
