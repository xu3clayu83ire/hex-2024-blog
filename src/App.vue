<script setup>
import { RouterView } from 'vue-router';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
  </main>

</template>

<style lang="scss">
@import '~/bootstrap-icons/font/bootstrap-icons.css';
@import '@/assets/styles/all.scss';

header {}
</style>