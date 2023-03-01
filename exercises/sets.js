'use strict'

const flights = ['Ukraine', 'USA', 'Great Britain', 'Great Britain', 'Great Britain', 'USA'];

const setFlights = new Set(flights);

console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('Ukraine'));

setFlights.add('Poland');
console.log(setFlights);

setFlights.add('Hungary');
console.log(setFlights);

setFlights.delete('Hungary');
console.log(setFlights);

// setFlights.clear();

for (const flight of setFlights) {
    console.log(flight);
}

console.log([...setFlights]);