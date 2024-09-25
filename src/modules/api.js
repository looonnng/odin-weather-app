async function getWeatherRequest(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=QN4SKBNRNBZPJZ8EHJNREJCUG`,
    );
    if (response.ok) {
      return response.json();
    }
  } catch (err) {
    console.error(err);
  }
}

async function processWeatherRequest(response) {
  const myPromise = new Promise((resolve) => resolve(response));
  const data = await myPromise;
  return data ? data : 'Please enter valid location';
}

export { getWeatherRequest, processWeatherRequest };
