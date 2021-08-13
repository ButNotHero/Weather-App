<template>
  <header class="page-header">
    <Search />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from '@/components/Search.vue';

export default defineComponent({
  name: 'PageHeader',
  components: { Search },
});
</script>

<style scoped lang="scss">
.page-header {
  padding: 20px 0;
}
</style>
