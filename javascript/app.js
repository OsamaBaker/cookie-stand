'use strict';


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

// Seattle
const seattle={
    locationName: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCustomersEachHour: function () {
        for(let i=0; i<hours.length; i++){
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

        }

    },

    calcCookiesEachHour:function (){
        for(let i=0; i<hours.length; i++){
            
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
            this.total+=this.cookiesEachHour[i];
        }
    },

    render: function(){
        let parent=document.getElementById('parent');
        let nameElement=document.createElement('h3');
        parent.appendChild(nameElement);
        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`
            
        }

        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent=`Total: ${this.total}`
    }
}

seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.render();
console.log(seattle);

// Tokyo

const tokyo={
    locationName: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCustomersEachHour: function () {
        for(let i=0; i<hours.length; i++){
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

        }

    },

    calcCookiesEachHour:function (){
        for(let i=0; i<hours.length; i++){
            
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
            this.total+=this.cookiesEachHour[i];
        }
    },

    render: function(){
        let parent=document.getElementById('parent');
        let nameElement=document.createElement('h3');
        parent.appendChild(nameElement);
        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`
            
        }

        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent=`Total: ${this.total}`
    }
}

tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.render();

// Dubai

const dubai={
    locationName: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCustomersEachHour: function () {
        for(let i=0; i<hours.length; i++){
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

        }

    },

    calcCookiesEachHour:function (){
        for(let i=0; i<hours.length; i++){
            
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
            this.total+=this.cookiesEachHour[i];
        }
    },

    render: function(){
        let parent=document.getElementById('parent');
        let nameElement=document.createElement('h3');
        parent.appendChild(nameElement);
        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`
            
        }

        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent=`Total: ${this.total}`
    }
}

dubai.calcCustomersEachHour();
dubai.calcCookiesEachHour();
dubai.render();

// Paris

const paris={
    locationName: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCustomersEachHour: function () {
        for(let i=0; i<hours.length; i++){
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

        }

    },

    calcCookiesEachHour:function (){
        for(let i=0; i<hours.length; i++){
            
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
            this.total+=this.cookiesEachHour[i];
        }
    },

    render: function(){
        let parent=document.getElementById('parent');
        let nameElement=document.createElement('h3');
        parent.appendChild(nameElement);
        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`
            
        }

        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent=`Total: ${this.total}`
    }
}

paris.calcCustomersEachHour();
paris.calcCookiesEachHour();
paris.render();

// Lima

const lima={
    locationName: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCustomersEachHour: function () {
        for(let i=0; i<hours.length; i++){
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));

        }

    },

    calcCookiesEachHour:function (){
        for(let i=0; i<hours.length; i++){
            
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
            this.total+=this.cookiesEachHour[i];
        }
    },

    render: function(){
        let parent=document.getElementById('parent');
        let nameElement=document.createElement('h3');
        parent.appendChild(nameElement);
        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`
            
        }

        let totalLi=document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent=`Total: ${this.total}`
    }
}

lima.calcCustomersEachHour();
lima.calcCookiesEachHour();
lima.render();