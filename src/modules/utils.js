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

getAddress('rochester mn');
getDescription('rochester mn');
