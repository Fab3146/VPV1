import { WeatherData } from '../types/weather';

const API_KEY = 'f439e60cb76ed983634ad07546c45238';
const BASE_URL = 'http://api.weatherstack.com';

export async function getWeather(): Promise<WeatherData> {
  try {
    const response = await fetch(
      `${BASE_URL}/current?access_key=${API_KEY}&query=Grisolles&units=m&language=fr`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}