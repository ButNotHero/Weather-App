<template>
  <header class="page-header">
    <nav id="nav">
      <router-link to="/">Главная</router-link>
      |
      <router-link to="/about">О нас</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHeader',
});
</script>

<style scoped lang="scss">
.page-header {
  &__lang-list {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style: none;
  }

  &__lang-item {
    color: $color-text;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: $color-link;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
