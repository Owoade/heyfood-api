import { Request, Response } from "express";
import resturant_service from ".";
import respond from "../../utils/respond";
import ServiceDecorator from "../../decorators";
import { filter_by_menu_validator, filter_by_params_validator, search_resturant_valudator } from "../../validators";

class ResturantController {
  constructor() {}

  async get_all(req: Request, res: Response) {

    const result = await resturant_service.get_all();

    respond(res, {
      status: "success",
      statusCode: 200,
      message: "Ok",
      data: {
        result
      },
    });

  }

  @ServiceDecorator.forRequestPayloadValidation(search_resturant_valudator, "query")
  async search( req: Request, res: Response ){

    const { query } = req.query;

    const result = await resturant_service.search(query as string);

    respond( res, {
        status: "success",
        message: "ok",
        data: {
            result
        },
        statusCode: 200
    })

  }

  @ServiceDecorator.forRequestPayloadValidation(filter_by_menu_validator)
  async filter_by_menu( req: Request, res: Response ){
    
    const result = await resturant_service.filter_by_menu(req.body.menu)

    respond( res, {
        status: "success",
        message: "ok",
        data: {
            result
        },
        statusCode: 200
    })

  }

  @ServiceDecorator.forRequestPayloadValidation(filter_by_params_validator,)
  async filter_by_params( req: Request, res: Response ){
    
    const result = await resturant_service.filter_by_param(req.body.param)

    respond( res, {
        status: "success",
        message: "ok",
        data: {
            result
        },
        statusCode: 200
    })

  }

  async get_all_tags( req: Request, res: Response ){
    
    const tags = await resturant_service.get_all_tags()

    respond( res, {
        status: "success",
        message: "ok",
        data: {
            tags
        },
        statusCode: 200
    })

  }

}


const resturant_controller = new ResturantController();

export default resturant_controller