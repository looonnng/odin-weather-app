async function getWeatherRequest(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=QN4SKBNRNBZPJZ8EHJNREJCUG`,
    );
    return response.json();
  } catch (err) {
    alert(err);
  }
}

export default getWeatherRequest;
