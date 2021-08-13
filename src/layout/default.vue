<template>
  <PageHeader />
  <main class="page-main">
    <h1>Default Layout</h1>
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from '@/components/common/PageHeader.vue';

export default defineComponent({
  name: 'default',
  components: { PageHeader },
});
</script>
