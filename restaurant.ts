import {EventEmitter} from "events";
import {RestaurantEvent, RestaurantEventName, RestaurantTableCountChangeEvent} from "./types/table-events";

export class Restaurant extends EventEmitter {

    // * Otwarcie restauracji.
    open() {
        // Emit...
        (this.emit as RestaurantEvent)(RestaurantEventName.Open);
    }

    // * Zamknięcie restauracji.
    close() {
        // Emit...
        (this.emit as RestaurantEvent)(RestaurantEventName.Close)
    }

// Metoda pomocnicza
    private changeTableCount(incDec: number) {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.Update, incDec)
    }


    // * Stolik został zarezerowany na teraz.
    // * Traktuj to jako po prostu 1 stolik mniej.
    reserveTable() {
        // Emit...
        this.changeTableCount(-1)
    }


    // * Odwołano rezerwację na stolik.
    // * Traktuj to jako po prostu 1 stolik więcej.
    cancelTableReservation() {
        // Emit...
        this.changeTableCount(1);
    }

    // * Ktoś wziął stolik bez rezerwacji.
    takeTableWithoutReservation() {
        // Emit...
        this.changeTableCount(-1)
    }


    // * Stolik się popsuł, odpadła noga :/
    markTableAsBroken() {
        // Emit...
        this.changeTableCount(-1)
    }

    // * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
    cleanupTable() {
        // Emit...
        this.changeTableCount(1)
    }
}
