<script setup>
import { ref } from 'vue'

const galleryOpen = ref(false)
const destinationOpen = ref(false)
</script>

<template>
    <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full">

        <img src="  ../assets/images/sos village.png" class="h-10 w-auto">

        <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">

            <li><router-link to="/" class="hover:text-yellow-300">Home</router-link></li>

            <li><router-link to="/about" class="hover:text-yellow-300">About</router-link></li>

            <li><router-link to="/services" class="hover:text-yellow-300">Services</router-link></li>

            <li class="relative">
                <a
                  href="/gallery"
                  @click.prevent="galleryOpen = !galleryOpen"
                  class="hover:text-yellow-300"
                >
                  Gallery <span>v</span>
                </a>

                <ul
                  v-if="galleryOpen"
                  class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg z-50"
                >
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Images</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Videos</a></li>
                </ul>
            </li>

            <li class="relative">
                <a
                  href="#"
                  @click.prevent="destinationOpen = !destinationOpen"
                  class="hover:text-yellow-300"
                >
                  Destination <span>v</span>
                </a>

                <ul
                  v-if="destinationOpen"
                  class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg z-50"
                >
                    <li><a href="/Kigali" class="block px-4 py-2 hover:bg-green-700">Kigali</a></li>
                    <li><a href="/South" class="block px-4 py-2 hover:bg-green-700">South</a></li>
                    <li><a href="/West" class="block px-4 py-2 hover:bg-green-700">West</a></li>
                    <li><a href="/North" class="block px-4 py-2 hover:bg-green-700">North</a></li>
                    <li><a href="/East" class="block px-4 py-2 hover:bg-green-700">East</a></li>
                </ul>
            </li>

            <li><a href="/contact" class="hover:text-yellow-300">Contact</a></li>

        </ul>
    </nav>
</template>