<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div
    class="bg-black text-white font-size-48 flex flex-col items-center justify-center h-screen"
  >
    <h2 ">{{ error?.statusCode }}</h2>
    <h1>wrong page</h1>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
