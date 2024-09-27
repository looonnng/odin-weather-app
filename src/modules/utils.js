async function getIcon(icon) {
  const myIcon = await import(`../assets/VCWeatherIcons/${icon}.png`);
  return myIcon;
}

async function createCurrentWeatherIcon(jsonData) {
  const iconText = jsonData.currentConditions.icon;
  const icon = new Image();
  const iconResponse = await getIcon(iconText);
  icon.src = iconResponse.default;
  return icon;
}

export async function displayCurrentWeatherIcon(jsonData) {
  const iconWrapper = document.querySelector('.current-weather-icon-wrapper');
  iconWrapper.replaceChildren(); // Clear previous icon

  const icon = await createCurrentWeatherIcon(jsonData);
  iconWrapper.appendChild(icon);
}

export function displayCurrentTemp(jsonData) {
  const currentTemp = jsonData.currentConditions.temp;
  const currentTempWrapper = document.querySelector(
    '.current-temperature-wrapper',
  );

  const weatherText = document.createElement('div');
  const weatherUnits = document.createElement('div');
  const fahrenheit = document.createElement('div');
  const celsius = document.createElement('div');
  const fahrenheitLink = document.createElement('a');
  const celsiusLink = document.createElement('a');

  weatherText.className = 'current-temperature flex';
  weatherUnits.className = 'weather-units flex';
  fahrenheit.className = 'fahrenheit';
  celsius.className = 'celsius';
  fahrenheitLink.className = 'fahrenheit-link';
  celsiusLink.className = 'celsius-link';

  fahrenheitLink.textContent = 'F°';
  celsiusLink.textContent = 'C°';
  weatherText.textContent = Math.ceil(currentTemp);

  fahrenheitLink.href = '#';
  celsiusLink.href = '#';

  fahrenheit.appendChild(fahrenheitLink);
  celsius.appendChild(celsiusLink);
  weatherUnits.append(fahrenheit, celsius);
  weatherText.appendChild(weatherUnits);
  currentTempWrapper.appendChild(weatherText);
}

export default { displayCurrentWeatherIcon, displayCurrentTemp };
