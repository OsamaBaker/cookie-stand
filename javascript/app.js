'use strict';
// Seattle
let seattleCookies={
    name: 'seattle',
    openHours: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12am',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
    ],
    minHourlyCust: 23,
    maxHourlyCust: 65,
    avgCookies: 6.3,
    randCusNumber: function getRndInteger(min, max) {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) ) + this.minHourlyCust;
},
    cookiesPerHour: function getCookies(){
        return Math.floor(this.randCusNumber() * this.avgCookies);
    }
}

// console.log(seattleCookies.randCusNumber());
// console.log(seattleCookies.cookiesPerHour());

// Tokyo

let tokyoCookies={
    name: 'tokyo',
    openHours: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12am',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
    ],
    minHourlyCust: 3,
    maxHourlyCust: 24,
    avgCookies: 1.2,
    randCusNumber: function getRndInteger(min, max) {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) ) + this.minHourlyCust;
},
    cookiesPerHour: function getCookies(){
        return Math.floor(this.randCusNumber() * this.avgCookies);
    }
}

// Dubai
let dubaiCookies={
    name: 'dubai',
    openHours: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12am',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
    ],
    minHourlyCust: 11,
    maxHourlyCust: 38,
    avgCookies: 3.7,
    randCusNumber: function getRndInteger(min, max) {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) ) + this.minHourlyCust;
},
    cookiesPerHour: function getCookies(){
        return Math.floor(this.randCusNumber() * this.avgCookies);
    }
}
//Paris
let parisCookies={
    name: 'paris',
    openHours: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12am',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
    ],
    minHourlyCust: 20,
    maxHourlyCust: 38,
    avgCookies: 2.3,
    randCusNumber: function getRndInteger(min, max) {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) ) + this.minHourlyCust;
},
    cookiesPerHour: function getCookies(){
        return Math.floor(this.randCusNumber() * this.avgCookies);
    }
}

// Lima
let limaCookies={
    name: 'lima',
    openHours: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12am',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
    ],
    minHourlyCust: 2,
    maxHourlyCust: 16,
    avgCookies: 4.6,
    randCusNumber: function getRndInteger(min, max) {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) ) + this.minHourlyCust;
},
    cookiesPerHour: function getCookies(){
        return Math.floor(this.randCusNumber() * this.avgCookies);
    }
}
