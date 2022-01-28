import {Restaurant} from "./restaurant";

const megaRestaurant = new Restaurant();
let tablesCount = 25;
// Tutaj dodaj nasłuchiwanie

megaRestaurant
    .on("OpenRestaurant", () => console.log("RESTAURANT OPEN!"))
    .on("closeRestaurant", () => console.log("RESTAURANT CLOSEED"))
    .on('tablesCountUpdate',  change => {
        tablesCount += change;
        console.log(`Dostepnych stolikow ${tablesCount}`)
    });

// .on("takeTableWithoutReservation", ww=>(tablesCount += ww))
// .on("takeTableWithoutReservation", ww=>(tablesCount - ww))
// .on("reserveTable", rt=>(tablesCount-rt))
// .on("cancelTableReservation", cr=>tablesCount+cr)
// .on("reserveTable", rt=>(tablesCount-rt))
// .on("reserveTable", rt=>(tablesCount-rt))
// .on("takeTableWithoutReservation", ww=>(tablesCount - ww))
// .on("takeTableWithoutReservation", ww=>(tablesCount - ww))
// .on("cleanupTable", ct=>(tablesCount - ct))

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
