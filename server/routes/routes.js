import express from "express";
import { getData } from "../controller/user-controller.js";

const routes = express.Router();

routes.get("/user", getData);

export default routes;
