import { getWeatherRequest, processWeatherRequest } from './api.js';

async function getIcon(icon) {
  const myIcon = await import(`../assets/VCWeatherIcons/${icon}.png`);
  return myIcon;
}

function render() {
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', handleSearch);
}

async function handleSearch(event) {
  event.preventDefault();
  const location = event.target[0].value;

  const data = await processWeatherRequest(getWeatherRequest(location));
  displayCurrentWeatherIcon(data);
  event.target[0].value = '';
}

async function createCurrentWeatherIcon(jsonData) {
  const iconText = jsonData.currentConditions.icon;
  const icon = new Image();
  const iconResponse = await getIcon(iconText);
  icon.src = iconResponse.default;
  return icon;
}

async function displayCurrentWeatherIcon(jsonData) {
  const iconWrapper = document.querySelector('.current-weather-icon-wrapper');
  iconWrapper.replaceChildren(); // Clear previous icon

  const icon = await createCurrentWeatherIcon(jsonData);
  iconWrapper.appendChild(icon);
}

export default render;