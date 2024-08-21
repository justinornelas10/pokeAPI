<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'


const pokemons = ref([])

const getData = async () => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        pokemons.value = data.results
        //console.log(data.results)


    } catch (error) {
        console.log(error)
    }
}

getData()

</script>


<template>
    <body class="m-5">
        <h1>Pokemons</h1>
        <ul class="list-group">
            <li v-for="pkm in pokemons" class="list-group-item">
                <RouterLink :to="`/pokemons/${pkm.name}`">{{ pkm.name }}</RouterLink>

            </li>
        </ul>
    </body>

</template>