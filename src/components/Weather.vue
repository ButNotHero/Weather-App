<template>
  <div class="weather">
    <div class="weather__container container">
      <div class="weather__loader" v-if="getLoadStatus()">
        <svg class="weather__circular" viewBox="25 25 50 50">
          <circle
            class="weather__path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="5"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
      <div
        class="weather__not-found"
        v-if="!getFoundStatus() && !getLoadStatus() && getCurrentCity()"
      >
        Город не найден :(
      </div>
      <table class="weather__table" v-if="getFoundStatus() && !getLoadStatus()">
        <thead class="weather__thead">
          <tr class="weather__tr">
            <th class="weather__th" rowspan="2">Дата</th>
            <th class="weather__th" colspan="2">Температура</th>
            <th class="weather__th" rowspan="2">Облачность</th>
            <th class="weather__th" rowspan="2">Скорость ветра</th>
          </tr>
          <tr class="weather__tr">
            <td class="weather__subheader">Мин.</td>
            <td class="weather__subheader">Макс.</td>
          </tr>
        </thead>
        <tbody class="weather__tbody">
          <tr class="weather__data-row" v-for="(item, index) of getWeatherDailyList()" :key="index">
            <td class="weather__data-cell">{{ item.dt_txt }}</td>
            <td class="weather__data-cell">{{ item.main.temp_min }}</td>
            <td class="weather__data-cell">{{ item.main.temp_max }}</td>
            <td class="weather__data-cell">{{ item.clouds.all }}</td>
            <td class="weather__data-cell">{{ item.wind.speed }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Weather',
  computed: {
    ...mapGetters(['currentWeather/daily', 'currentWeather/load', 'currentWeather/found']),
  },
  methods: {
    getWeatherDailyList() {
      return this['currentWeather/daily'].list;
    },
    getLoadStatus() {
      return this['currentWeather/load'];
    },
    getFoundStatus() {
      return this['currentWeather/found'];
    },
    getCurrentCity() {
      return localStorage.getItem(process.env.LOCAL_STORAGE_CITY);
    },
  },
});
</script>

<style scoped lang="scss">
.weather {
  $_margin-top: 30px;

  &__loader {
    position: relative;
    width: 70px;
    margin: $_margin-top auto 0 auto;

    &::before {
      display: block;
      padding-top: 100%;
      content: '';
    }
  }

  &__circular {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    transform-origin: center center;
    animation: rotate 2s linear infinite;
  }

  &__path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  &__not-found {
    margin-top: $_margin-top;
    color: $color-gray-200;
    font-weight: 500;
    font-size: 30px;
    font-family: $ff-default;
    letter-spacing: 0.6px;
    text-align: center;
  }

  &__table {
    margin: $_margin-top auto 50px auto;
    color: $color-gray-200;
    font-family: $ff-default;
    text-align: center;
    border-collapse: collapse;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  }

  &__th {
    padding: 10px 40px;
    background: $color-blue-700;
    border: 1px solid $color-blue-500;
  }

  &__subheader {
    font-weight: 700;
    background: $color-blue-700;
    border: 1px solid $color-blue-500;
  }

  &__data-row {
    &:nth-child(odd) {
      background: $color-blue-600;
    }

    &:nth-child(even) {
      background: $color-blue-500;
    }
  }

  &__data-cell {
    padding: 20px 14px;
    border: 1px solid $color-blue-500;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100%,
    0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  }
}
</style>
