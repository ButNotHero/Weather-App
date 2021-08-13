<template>
  <div class="search">
    <form class="search__form" @submit.prevent="handleSearch()">
      <div class="search__field">
        <input
          type="text"
          class="search__input"
          placeholder="Введите название города"
          v-model="searchInput"
          v-on:keypress="handleInput"
        />
        <span class="search__clear" v-if="searchInput" @click="clearCurrentCity()">Очистить</span>
      </div>
      <button class="search__btn">Поиск</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

const localStorageCity = process.env.LOCAL_STORAGE_CITY;

export default defineComponent({
  name: 'Search',
  data() {
    return {
      searchInput: '',
    };
  },
  async mounted() {
    this.initSearchInput();
    await this.handleSearch();
  },
  methods: {
    ...mapActions(['currentWeather/dailyByCityName']),
    initSearchInput() {
      const currentCity = localStorage.getItem(localStorageCity);

      if (currentCity) {
        this.searchInput = currentCity;
      }
    },
    handleInput() {
      localStorage.setItem(localStorageCity, this.searchInput);
    },
    async handleSearch() {
      if (this.searchInput) {
        await this['currentWeather/dailyByCityName'](this.searchInput);
      }
    },
    clearCurrentCity() {
      localStorage.removeItem(localStorageCity);
      this.searchInput = '';
    },
  },
});
</script>

<style scoped lang="scss">
.search {
  $_fz-text: 18px;
  $_padding-sides: 14px;

  &__form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__field {
    position: relative;
  }

  &__clear {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: $_padding-sides;
    padding-left: $_padding-sides;
    color: $color-gray-600;
    font-family: $ff-default;
    cursor: pointer;
  }

  &__input {
    min-width: 500px;
    padding: 12px 100px 12px $_padding-sides;
    color: $color-gray-200;
    font-weight: 300;
    font-size: $_fz-text;
    font-family: $ff-default;
    letter-spacing: 0.4px;
    background: $color-blue-600;
    border: none;
    border-radius: 4px;
    outline: none;
    transition: all 0.1s ease;

    &:focus {
      border-bottom-color: #278cf3;
    }
  }

  &__btn {
    margin-left: 18px;
    padding: 12px 30px;
    color: $color-gray-200;
    font-size: $_fz-text;
    font-family: $ff-default;
    background: $color-blue-700;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
      background: $color-blue-600;
    }
  }
}
</style>
