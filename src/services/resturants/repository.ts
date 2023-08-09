import { FilterQuery } from "mongoose";
import Store, { Tag } from "./model";
import { IStore, ITag } from "./type";

class ResturantRepository {
  constructor() {
    this.filter_by_params = this.filter_by_params.bind(this);
    this.search = this.search.bind(this);
  }

  async get_all() {
    const all_resturant = await Store.find();

    return all_resturant;
  }

  async search(query: string) {
    const result = await Store.find({
      $or: [
        { name: { $regex:  this.capitalizeWords(query), } },
        { _menu: { $regex: query } },
      ],
    }).exec();

    return result as IStore[];
  }

  async filter_by_menu(menu: string[]) {

    const result = await Store.find({
      menu: {
        $in: menu,
      },
    });

    return result as IStore[];
  }

  async filter_by_params(param: FilterParams, payload?: any) {;

    const query = this.query_hash(param);

    if(param === "still-opened") payload = (new Date()).getHours();

    const result = await Store.find( query(payload) ).exec();

    return result as IStore[];

  }

  async get_all_tags(){
    return ( await Tag.find() ) as ITag[]
  }

  private capitalizeWords(words: string) {
    return words
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private query_hash( param: FilterParams ) {

   const hash =  {

      "most-popular": () => ({
        no_of_ratings: { $gte: 2000 },
      }),
      "still-opened": (payload) => ({
        $or: [{ closing_time: payload }, { closing_time: Infinity }],
      }),
      "most-rated": () => ({
        no_of_ratings: { $gte: 2000 },
      }),
      "highest-rated": () => ({
        rating: { $gte: 4 }
      }),
      "new-arrival": ()=>{
        const beginning_of_month = new Date();
        beginning_of_month.setDate(1); // Set day to the 1st
       
        beginning_of_month.setHours(0, 0, 0, 0); // Set time to midnight
        const milliseconds = beginning_of_month.getTime();

        return {
        joined: {$gte: milliseconds}
      }
    }
    } as Record<FilterParams, (payload?: any) => FilterQuery<IStore>>;

    return hash[param]
  }
}

const resturant_repository = new ResturantRepository();

export default resturant_repository;

export type FilterParams =
  | "most-popular"
  | "still-opened"
  | "new-arrival"
  | "most-rated"
  | "highest-rated";
