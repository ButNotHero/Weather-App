/* eslint-disable */

import WeatherService from '@/services/weather.service';
import { WeatherDaily } from '@/types/weather.daily.d';

export const currentWeather = {
  namespaced: true,
  state: {
    isFound: false,
    isLoad: false,
    daily: {} as WeatherDaily,
  },
  actions: {
    dailyByCityName({ commit }: { commit: any }, cityName: string): Promise<WeatherDaily> {
      commit('load', true);

      return WeatherService.dailyByCityName(cityName).then(
        (response) => {
          commit('load', false);

          if (Number(response.cod) === 404) {
            commit('found', false);
            return Promise.reject('Город не найден');
          }

          commit('found', true);
          commit('daily', response);

          return Promise.resolve(response);
        },
        (error) => {
          commit('load', false);
          commit('found', false);
          return Promise.reject(error);
        },
      );
    },
  },
  mutations: {
    load(state: any, status): void {
      state.isLoad = status;
    },
    found(state: any, status): void {
      state.isFound = status;
    },
    daily(state: any, weather: WeatherDaily): void {
      state.daily = weather;
    },
  },
  getters: {
    load: (state: any): boolean => state.isLoad,
    found: (state: any): boolean => state.isFound,
    daily: (state: any): WeatherDaily => state.daily,
  },
};
