
import { Request, Response } from "express";
import Joi from "joi";
import respond from "../utils/respond";

const ServiceDecorator = {
    forRequestPayloadValidation(
        validator: Joi.ObjectSchema,
        type?: "body" | "query",
        property?: string,
        stringified?: boolean
      ) {
        return function (
          target: any,
          propertyKey: string,
          descriptor: PropertyDescriptor
        ) {
          const value = descriptor?.value;
    
          descriptor.value = async function (...args: [Request, Response]) {
            const [request, response] = args;
    
            console.log(request[type ?? "body"]);
    
            let payload = request[type ?? "body"] ?? request;
    
            const { error } = validator.validate(payload);
    
            if (!request?.body && error) return console.error(error?.message);
    
            if (error) {
              return respond(response, {
                status: "error",
                statusCode: 400,
                data: {},
                message: error.message,
              });
            }
    
            const result = await value.apply(this, args);
            return result;
          };
    
          // return descriptor;
        };
      },
}

export default ServiceDecorator;

