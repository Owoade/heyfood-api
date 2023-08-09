import mongoose, { mongo } from "mongoose";
import schema_type from "../../utils/schema_type";
import { IStore, ITag } from "./type";


const StoreSchema = new mongoose.Schema({

    name: schema_type.required(String),

    image: schema_type.required(String),

    rating: schema_type.required(Number),

    no_of_ratings: schema_type.required(Number),

    opening_time: schema_type.required(Number),

    closing_time: schema_type.required(Number),

    order_tiime: schema_type.number(),

    manages_delivery: schema_type.boolean(),
    
    is_taking_order: schema_type.boolean(),

    // Used in Tag search
    menu: schema_type.required([String]),

    // Used in Text Search
    _menu: schema_type.string(),

    joined: schema_type.number()

}, { timestamps: true })

const TagSchema = new mongoose.Schema({

    name: schema_type.required(String),

    image: schema_type.required(String)

})



export const Tag = mongoose.model<ITag>("Tag", TagSchema);

const Store = mongoose.model<IStore>("Store", StoreSchema);

export default Store;