<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <div data-theme="rick_morty" class="w-screen h-screen bg-base-100 flex flex-col items-center">
    <div class="w-4/5 pt-5">
      <input type="text" class="input input-primary w-full" placeholder="Buscar" />
    </div>
    <RouterView />
  </div>
</template>
