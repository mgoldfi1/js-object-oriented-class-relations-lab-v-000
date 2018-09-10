
let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips () {
    return store.trips.filter(function(x) {return x.driverId === this.id}.bind(this))
  }
  passengers () {
    for (const trip of this.trips) {
      console.log(trip)
    }
    )

  }


}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
  trips () {
    return store.trips.filter(function(x) {return x.passengerId === this.id}.bind(this))
  }
}

class Trip {

  constructor(driver,passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  passenger () {
    return store.passengers.find(function(x) {return x.id === this.passengerId}.bind(this))
  }
  driver () {
    return store.drivers.find(function(x) {return x.id === this.driverId}.bind(this))
  }

}
