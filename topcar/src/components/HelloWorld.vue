<script setup>
import { defineComponent, ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
let cars = [
  {
    id: 1,
    marca: "audi",
    modelo: "A5",
    ano: 2020,
    combustivel: ["gasolina", "etanol"],
    portas: 4,
    km: 50000,
  },

  {
    id: 2,
    marca: "bmw",
    modelo: "A3",
    ano: 2022,
    combustivel: ["gasolina", "etanol"],
    portas: 4,
    km: 0,
  },
];

let photos = [{ url: "car1" }, { url: "car2" }];
function getImages(index) {
  return new URL(`../assets/${photos[index].url}.jpg`, import.meta.url).href;
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div
        class="card"
        style="width: 22rem"
        v-for="car in cars"
        v-bind:key="car.id"
      >
        <div class="col-12">
          <img :src="getImages(car.id - 1)" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">marca: {{ car.marca }}</p>
            <p class="card-text">modelo: {{ car.modelo }}</p>
            <p class="card-text">ano: {{ car.ano }}</p>
            <p class="card-text">combustivel: {{ car.combustivel }}</p>
            <p class="card-text">portas: {{ car.portas }}</p>
            <p class="card-text">km:{{ car.km }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>


