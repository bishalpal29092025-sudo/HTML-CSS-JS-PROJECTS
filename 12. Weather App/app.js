const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");

// Clear previous weather data
function clearWeather() {
  cityName.textContent = "";
  temperature.textContent = "";
  description.textContent = "";
  humidity.textContent = "";
  windSpeed.textContent = "";
  weatherIcon.src = "";
  errorMessage.textContent = "";
}

// Search button click
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    clearWeather();
    getWeather(city);
  }
});

// Allow Enter key
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

async function getWeather(city) {
  try {
    searchBtn.textContent = "Loading...";
    searchBtn.disabled = true;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `🌡️ Temperature: ${data.main.temp}°C`;
    description.textContent = `🌤️ ${data.weather[0].description}`;
    humidity.textContent = `💧 Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  } catch (error) {
    clearWeather();
    errorMessage.textContent = error.message;
  } finally {
    searchBtn.textContent = "Search";
    searchBtn.disabled = false;
  }
}