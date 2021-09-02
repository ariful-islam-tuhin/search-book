const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (counties) => {
  const countriesDiv = document.getElementById("countries");
  counties.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h2> ${country.name} </h2>
    <h4> ${country.capital} </h4>
    <button onclick = 'loadCountryByName("${country.name}")'> details </button>
    `;
    countriesDiv.appendChild(div);
  });
};

const loadCountryByName = (name) => {
  const url = `https:restcountries.eu/rest/v2/name/${name}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  console.log(country);
  const countryDiv = document.getElementById("country-detail");
  countryDiv.innerHTML = `
  <h5>${country.name}</h5>
  <p>population: ${country.population}</p>
  <p>region: ${country.region}</p>

  <img width="200px" src="${country.flag}">
  `;
};
