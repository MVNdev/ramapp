<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

import { useApi } from './composables/useAPI'

import CardCharacters from './components/CardCharacter.vue'

const apiURL = ref('https://rickandmortyapi.com/api/character/')

const { data, error, loading, loadData } = useApi(apiURL.value)
loadData()
</script>

<template>
  <div data-theme="rick_morty" class="w-screen h-screen bg-base-100 flex flex-col items-center">
    <div class="w-4/5 pt-5 flex flex-col gap-5">
      <input type="text" class="input input-primary w-full" placeholder="Buscar" />
      <span className="loading loading-spinner text-accent" v-if="loading"></span>
      <p v-if="error">Error!</p>
      <CardCharacters
        v-for="(character, index) in data.results"
        :key="index"
        :name="character.name"
        :gender="character.gender"
        :status="character.status"
        :image="character.image"
        :species="character.species"
      />
    </div>
    <RouterView />
  </div>
</template>
