import Joi from "joi";

export const search_resturant_valudator = Joi.object({
  query: Joi.string().required(),
}).required();

export const filter_by_menu_validator = Joi.object({
  menu: Joi.array()
    .max(5)
    .required(),
}).required();

export const filter_by_params_validator = Joi.object({
  param: Joi.string().valid(
    "most-popular",
    "still-opened",
    "new-arrival",
    "most-rated",
    "highest-rated"
  ),
}).required();
