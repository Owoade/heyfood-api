import resturant_repository, { FilterParams } from "./repository";

class ResturantService {
    constructor(){}

    async get_all(){
        return (await resturant_repository.get_all());
    }

    async search( query: string ){
        return (await resturant_repository.search(query));
    }

    async filter_by_menu( menu: string[] ){
        return (await resturant_repository.filter_by_menu(menu));
    }

    async filter_by_param( param: FilterParams, payload?: any ){
        return ( await resturant_repository.filter_by_params(param, payload ));
    }

    async get_all_tags(){
        return  ( await resturant_repository.get_all_tags() )
    }

}

const resturant_service = new ResturantService();

export default resturant_service;