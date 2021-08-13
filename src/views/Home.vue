<template>
  <div class="home">
    <Weather />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Weather from '@/components/Weather.vue';

export default defineComponent({
  name: 'Home',
  components: { Weather },
});
</script>
