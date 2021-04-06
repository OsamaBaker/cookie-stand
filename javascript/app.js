'use strict';


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let allShops = [];

function Location(name, minCustomers, maxCustomers, avgCookies) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.cookiesPerDay = 0;
    allShops.push(this);

}

Location.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

    }

};

Location.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {

        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
        this.cookiesPerDay += this.cookiesEachHour[i];
    }
};
let parent = document.getElementById('table-div');
let table = document.createElement('table');
parent.appendChild(table);

function makingHeader() {


    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let firstTh = document.createElement('th');
    headingRow.appendChild(firstTh);
    firstTh.textContent = 'name';


    let headings = hours;
    for (let i = 0; i < hours.length; i++) {
        let thElement = document.createElement('th');
        headingRow.appendChild(thElement);
        thElement.textContent = headings[i];
    }
    let finalTh = document.createElement('th');
    headingRow.appendChild(finalTh);
    finalTh.textContent = 'Daily Location Total';
}

makingHeader();

Location.prototype.render = function () {


    let shopRow = document.createElement('tr');
    table.appendChild(shopRow);
    let tdElement = document.createElement('td');
    shopRow.appendChild(tdElement);
    tdElement.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {
        let cookiesTd = document.createElement('td');
        shopRow.appendChild(cookiesTd);
        cookiesTd.textContent = this.cookiesEachHour[i];

        // tdElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`;

    };

    let totaltd = document.createElement('td');
    shopRow.appendChild(totaltd);
    totaltd.textContent = `${this.cookiesPerDay}`
};





let seattle = new Location('Seattle', 23, 65, 6.3);
seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.render();

// console.log(seattle);

let tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.render();

let dubai = new Location('Dubai', 11, 38, 3.7);
dubai.calcCustomersEachHour();
dubai.calcCookiesEachHour();
dubai.render();

let paris = new Location('Paris', 20, 38, 2.3);
paris.calcCustomersEachHour();
paris.calcCookiesEachHour();
paris.render();

let lima = new Location('Lima', 2, 16, 4.6);
lima.calcCustomersEachHour();
lima.calcCookiesEachHour();
lima.render();

// making footer function
function makingFooter() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let firstTh = document.createElement('th');
    footerRow.appendChild(firstTh);
    firstTh.textContent = 'Totals'

    let megaTotal=0;
    let totalEachHourAllShops = 0;
    // making totals
    for (let i = 0; i < hours.length; i++) {
        let footerTd = document.createElement('th');
        footerRow.appendChild(footerTd);
        // footerTd.textContent = '0';
        totalEachHourAllShops = 0;

        for (let j = 0; j < allShops.length; j++) {
            totalEachHourAllShops+=allShops[j].cookiesEachHour[i];
            
        }
        footerTd.textContent=totalEachHourAllShops;
        // console.log(totalEachHourAllShops)
        
        megaTotal+=totalEachHourAllShops;
        
    }

    let megaTotalTh = document.createElement('th');
    footerRow.appendChild(megaTotalTh);
    megaTotalTh.textContent=megaTotal;
    console.log(megaTotal);



    // for (let i = 0; i < hours.length; i++) {
    //     let totalsTr = document.createElement('th');
    //     table.appendChild(totalsTr);
    //     totalsTr.textContent= footerTotal[i];



}
// console.log(allShops);


makingFooter();

// // Seattle
// const seattle={
//     locationName: 'Seattle',
//     minCustomers: 23,
//     maxCustomers: 65,
//     avgCookies: 6.3,
//     customersEachHour:[],
//     cookiesEachHour:[],
//     total:0,


//     calcCustomersEachHour: function () {
//         for(let i=0; i<hours.length; i++){
//             this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

//         }

//     },

//     calcCookiesEachHour:function (){
//         for(let i=0; i<hours.length; i++){

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
//             this.total+=this.cookiesEachHour[i];
//         }
//     },

//     render: function(){
//         let parent=document.getElementById('parent');
//         let nameElement=document.createElement('h3');
//         parent.appendChild(nameElement);
//         nameElement.textContent=this.locationName;

//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);

//             liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent=`Total: ${this.total}`
//     }
// }

// seattle.calcCustomersEachHour();
// seattle.calcCookiesEachHour();
// seattle.render();
// console.log(seattle);

// // Tokyo

// const tokyo={
//     locationName: 'Tokyo',
//     minCustomers: 3,
//     maxCustomers: 24,
//     avgCookies: 1.2,
//     customersEachHour:[],
//     cookiesEachHour:[],
//     total:0,


//     calcCustomersEachHour: function () {
//         for(let i=0; i<hours.length; i++){
//             this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

//         }

//     },

//     calcCookiesEachHour:function (){
//         for(let i=0; i<hours.length; i++){

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
//             this.total+=this.cookiesEachHour[i];
//         }
//     },

//     render: function(){
//         let parent=document.getElementById('parent');
//         let nameElement=document.createElement('h3');
//         parent.appendChild(nameElement);
//         nameElement.textContent=this.locationName;

//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);

//             liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent=`Total: ${this.total}`
//     }
// }

// tokyo.calcCustomersEachHour();
// tokyo.calcCookiesEachHour();
// tokyo.render();

// // Dubai

// const dubai={
//     locationName: 'Dubai',
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgCookies: 3.7,
//     customersEachHour:[],
//     cookiesEachHour:[],
//     total:0,


//     calcCustomersEachHour: function () {
//         for(let i=0; i<hours.length; i++){
//             this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

//         }

//     },

//     calcCookiesEachHour:function (){
//         for(let i=0; i<hours.length; i++){

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
//             this.total+=this.cookiesEachHour[i];
//         }
//     },

//     render: function(){
//         let parent=document.getElementById('parent');
//         let nameElement=document.createElement('h3');
//         parent.appendChild(nameElement);
//         nameElement.textContent=this.locationName;

//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);

//             liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent=`Total: ${this.total}`
//     }
// }

// dubai.calcCustomersEachHour();
// dubai.calcCookiesEachHour();
// dubai.render();

// // Paris

// const paris={
//     locationName: 'Paris',
//     minCustomers: 20,
//     maxCustomers: 38,
//     avgCookies: 2.3,
//     customersEachHour:[],
//     cookiesEachHour:[],
//     total:0,


//     calcCustomersEachHour: function () {
//         for(let i=0; i<hours.length; i++){
//             this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

//         }

//     },

//     calcCookiesEachHour:function (){
//         for(let i=0; i<hours.length; i++){

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
//             this.total+=this.cookiesEachHour[i];
//         }
//     },

//     render: function(){
//         let parent=document.getElementById('parent');
//         let nameElement=document.createElement('h3');
//         parent.appendChild(nameElement);
//         nameElement.textContent=this.locationName;

//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);

//             liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent=`Total: ${this.total}`
//     }
// }

// paris.calcCustomersEachHour();
// paris.calcCookiesEachHour();
// paris.render();

// // Lima

// const lima={
//     locationName: 'Lima',
//     minCustomers: 2,
//     maxCustomers: 16,
//     avgCookies: 4.6,
//     customersEachHour:[],
//     cookiesEachHour:[],
//     total:0,


//     calcCustomersEachHour: function () {
//         for(let i=0; i<hours.length; i++){
//             this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

//         }

//     },

//     calcCookiesEachHour:function (){
//         for(let i=0; i<hours.length; i++){

//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
//             this.total+=this.cookiesEachHour[i];
//         }
//     },

//     render: function(){
//         let parent=document.getElementById('parent');
//         let nameElement=document.createElement('h3');
//         parent.appendChild(nameElement);
//         nameElement.textContent=this.locationName;

//         let ulElement=document.createElement('ul');
//         parent.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             let liElement=document.createElement('li');
//             ulElement.appendChild(liElement);

//             liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`

//         }

//         let totalLi=document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent=`Total: ${this.total}`
//     }
// }

// lima.calcCustomersEachHour();
// lima.calcCookiesEachHour();
// lima.render();
