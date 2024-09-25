import {
  getAddress,
  getDescription,
  getDaysForecast,
  getCurrentConditions,
} from './utils';

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const location = event.target[0].value;
  getAddress(location);
  getDescription(location);
  getCurrentConditions(location);
  getDaysForecast(location);
  event.target[0].value = '';
}
