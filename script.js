// 4 steps:
// What is XML-HTTP request??
// XML-HTTP request are used to interact with the server via API
// 1 step: create a XHR Object:
var request =  new XMLHttpRequest();
//2 nd Step: Open a Request
// the purpose is which API, and Which HTTP method
// this will take 2 important String 
//  first is HTTP method as well as API
request.open("GET","https://restcountries.com/v3.1/all");
// 3rd Step: initiate a request
request.send();
//4 th step: Once the data successfully loaded from the server
// if the status code from  the server is of 200
// Assuming you have a valid XMLHttpRequest object named 'request'
request.onload = function () {
  var res = JSON.parse(request.response);
  console.log(res);

  // Get all the countries from Asia continent/region using Filter function
  var asiaCountries = res.filter((country) => country.region === "Asia");
  console.log("Asia Countries:", asiaCountries);

  // Get all the countries with a population of less than 2 lakhs using Filter function
  var countriesWithLowPopulation = res.filter(
    (country) => country.population < 200000
  );
  console.log("Countries with population less than 2 lakhs:", countriesWithLowPopulation);

  // Print the following details name, capital, flag, using forEach function
  res.forEach((country) => {
    console.log(
      `Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`
    );
  });

  // Print the total population of countries using reduce function
  var totalPopulation = res.reduce(
    (accumulator, country) => accumulator + country.population,
    0
  );
  console.log("Total population of countries:", totalPopulation);

  // Print the country that uses US dollars as currency
  var countryWithUSD = res.find((country) =>
    country.currencies.hasOwnProperty("USD")
  );
  console.log("Country that uses US dollars:", countryWithUSD);
};
