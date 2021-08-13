import { WeatherDaily } from '@/types/weather.daily.d';

const API_URL = process.env.VUE_APP_API_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

/**
 * Получение данных о погоде
 */
class WeatherService {
  /**
   * Текущая погода в городе
   * @param cityName Название города (латиница или кириллица)
   */
  currentByCityName(cityName: string) {
    return fetch(`//${API_URL}/weather?q=${cityName}&appid=${API_KEY}`)
      .then((response) => Promise.resolve(response.json()))
      .catch((error) => console.error(`Error. Message: ${error.message}`));
  }

  /**
   * Прогноз погоды на 5 дней с шагом в 3 часа
   * @param cityName Название города (латиница или кириллица)
   */
  dailyByCityName(cityName: string): Promise<WeatherDaily> {
    return fetch(`//${API_URL}/forecast?q=${cityName}&appid=${API_KEY}&lang=ru&units=metric`)
      .then((response) => Promise.resolve(response.json()))
      .catch((error) => console.error(`Error. Message: ${error.message}`));
  }
}

export default new WeatherService();
