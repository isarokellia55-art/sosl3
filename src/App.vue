<script setup>
import Home from './views/Home.vue'
import  Services from './views/service.vue'
import contact from './views/contact.vue';
import Navbar from './components/navbar.vue'
import { RouterView } from 'vue-router'
import Footer from './components/footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <!-- <Services/> -->
  <!-- <Home /> -->
   <Footer />
</template>




