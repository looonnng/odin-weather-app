import { getWeatherRequest, processWeatherRequest } from './api.js';
import {
  displayCurrentWeatherIcon,
  displayCurrentConditions,
} from './utils.js';

function render() {
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', handleSearch);
}

async function handleSearch(event) {
  event.preventDefault();
  const location = event.target[0].value;

  const data = await processWeatherRequest(getWeatherRequest(location));

  if (data) {
    displayCurrentWeatherIcon(data);
    displayCurrentConditions(data);
    event.target[0].value = '';
    return;
  }

  alert('please enter a valid location');
}

export default render;
