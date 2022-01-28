import {Restaurant} from "./restaurant";
import {RestaurantEventName, RestaurantTableCountChangeCallback} from "./types/table-events";

const megaRestaurant = new Restaurant();
let tablesCount = 25;
// Tutaj dodaj nasłuchiwanie

const reset = "\x1b[0m";
const green = "\x1b[32m";
const red = "\x1b[31m";
const yellow = "\x1b[33m"

megaRestaurant
    .on(RestaurantEventName.Open, () => console.log(green, 'RESTAURANT OPEN! \n',reset))
    .on(RestaurantEventName.Close, () => console.log(red, "\n RESTAURANT CLOSEED \n", reset))
    .on(RestaurantEventName.Update,  (change => {
        tablesCount += change;
        console.log(yellow, `Dostepnych stolikow ${tablesCount}`, reset)
    }) as RestaurantTableCountChangeCallback);

// console.log(tablesCount)

megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."
