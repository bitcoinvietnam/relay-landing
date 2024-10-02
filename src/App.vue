<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from '@/components/Header.vue'
</script>

<template>
  <img src="@/assets/blue-spark.webp" class="position-absolute start-5 top-0 translate-middle opacity-75"
    style="z-index: -1;">
  <HeaderNav />
  <RouterView />
</template>