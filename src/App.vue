<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="p-relative full-page vh-100 text-bg-dark text-light">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
