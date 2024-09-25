import getWeatherRequest from './api';

async function processWeatherRequest(response) {
  const myPromise = new Promise((resolve) => resolve(response));
  const data = await myPromise;
  return data;
}

function getAddress(location) {
  processWeatherRequest(getWeatherRequest(location)).then((res) =>
    console.log(res.address),
  );
}

function getDescription(location) {
  processWeatherRequest(getWeatherRequest(location)).then((res) =>
    console.log(res.description),
  );
}

function getDaysForecast(location) {
  processWeatherRequest(getWeatherRequest(location)).then((res) =>
    console.log(res.days),
  );
}

function getCurrentConditions(location) {
  processWeatherRequest(getWeatherRequest(location)).then((res) =>
    console.log(res.currentConditions),
  );
}

export { getAddress, getDescription, getDaysForecast, getCurrentConditions };
