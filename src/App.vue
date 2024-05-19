<script setup>
import { RouterView } from 'vue-router'

import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style lang="scss">
@import '~/bootstrap-icons/font/bootstrap-icons.css';
@import '@/assets/styles/all.scss';
</style>