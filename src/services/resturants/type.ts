export interface IStore {
    name: string;
    image: string;
    rating: number;
    menu: string[];
    no_of_ratings: number;
    opening_time: number;
    closing_time: number;
    free_delivery_price?: number;
    order_time?: number;
    manages_delivery?: boolean;
    is_taking_order: boolean;
    _menu?: string;
    joined?: number
  }

  export interface ITag {
    name: string,
    image: string
  }