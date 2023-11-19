<script setup>
import { ref } from 'vue'
const props = defineProps({
  name: String,
  status: String,
  species: String,
  gender: String,
  image: String
})
const name    = ref(props.name)
const status  = ref(props.status)
const species = ref(props.species)
const gender  = ref(props.gender)
const image   = ref(props.image)
</script>

<template>
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img :src="image" :alt="name" /></figure>
    <div className="card-body">
      <h2 className="card-title">Character: {{ name }}</h2>
      <p>Status:  {{ status }}</p>
      <p>Species: {{ species }}</p>
      <p>Gender:  {{ gender }}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>
