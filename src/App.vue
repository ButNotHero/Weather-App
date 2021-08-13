<template>
  <component :is="this.$route.meta.layout || defaultLayout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultLayout from '@/layout/default.vue';

export default defineComponent({
  components: {
    DefaultLayout,
  },
  setup() {
    const defaultLayout = DefaultLayout;
    return {
      defaultLayout,
    };
  },
});
</script>
