"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
        <img class="country__img" src="${data.flag}">
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 10000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

///////////////////////////////////////

// AJAX Call The Old Way
// const getCountryData = function(country) {
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener("load", function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);

//       const html = `<article class="country">
//       <img class="country__img" src="${data.flag}">
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 10000000
//           ).toFixed(1)}M people</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//       </article>`;

//       countriesContainer.insertAdjacentHTML("beforeend", html);
//       countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');

// const getCountryNeighbour = function (country) {
//   // AJAX Call Country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render Country 1
//     renderCountry(data);

//     // Get Neighbour Country 2
//     const [neightbour] = data.borders;

//     if (!neightbour) return;

//     // AJAX Call Country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       "GET",
//       `https://restcountries.eu/rest/v2/alpha/${neightbour}`
//     );
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryNeighbour("ireland");
// getCountryNeighbour("usa");

// Callback Hell, Bad Practise, Do Not Use
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

///////////////////////////////////////////////////
// Modern AJAX Call

// Promises

// const getCountryData = function (country) {
//   const request = fetch(
//     `https://restcountries.eu/rest/v2/name/${country}`
//   ).then(function (response) {
//     console.log(response);
//     return response.json();
//   }).then(function (data) {
//     console.log(data);
//     renderCountry(data[0]);
//   });
// };

// Arrow functions & Chaining Promises

// Helper Function
const getJSON = function (url, errorMsg = "Somthing went wrong.") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       //   const neightbour = data[0].borders[0];'
//       const neightbour = "sadfafs";
//       if (!neightbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neightbour}`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error("Error is ", err);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("ireland");
// });

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country not found"
  )
    .then((data) => {
      renderCountry(data[0]);
      const neightbour = data[0].borders[0];

      if (!neightbour) throw new Error('No neighbour found');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neightbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error("Error is ", err);
      renderError(`Something went wrong. ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("ireland");
});

getCountryData("australia");

////////////////////////////////////////////
// Challenge Geocoding 








