
const location = "Medellín,co";
const api_key = "5050e931fb63ed263c67e1293bceeb49";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
export const api_weather = encodeURI(`${url_base_weather}?q=${location}&appid=${api_key}`);

