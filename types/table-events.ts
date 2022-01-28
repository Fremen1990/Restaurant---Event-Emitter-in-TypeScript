export enum RestaurantEventName {
    Open="openRestaurant",
    Close="closeRestaurant",
    Update="tablesCountUpdate",
}

export type RestaurantEvent = (eventName: RestaurantEventName) => boolean;

export type RestaurantTableCountChangeEvent = (eventName: RestaurantEventName.Update, IncDec:number) => boolean;

export type RestaurantTableCountChangeCallback = (incDec:number) => void;
