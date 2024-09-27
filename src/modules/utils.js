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

export default { displayCurrentWeatherIcon };
