import { Router } from "express";
import resturant_controller from "./controller";

const resturant_router = Router();

resturant_router.get("/",  resturant_controller.get_all);

resturant_router.get("/tags", resturant_controller.get_all_tags);

resturant_router.post("/menu", resturant_controller.filter_by_menu);

resturant_router.post("/sort", resturant_controller.filter_by_params);

resturant_router.get("/search", resturant_controller.search);

export default resturant_router;