<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

import axios from 'axios'
const route = useRoute()
const router = useRouter()


const typesImg = import.meta.glob('@/assets/icons_types/*.png') 

console.log('Rutas generadas por import',typesImg)

const poke = ref({})
const back = () => {
    router.push('/pokemons')
}


const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        console.log(data)
        poke.value = data
        //console.log(poke.value)

    } catch (error) {
        console.log(error)
    }

}
getData()

function getTypeIcon(typeName) {
    console.log(typeName)
    // const typeImg = `@/assets/icons_types/${typeName}.png`
    const typeImg = `/src/assets/icons_types/${typeName}.png`
    console.log(typeImg)
    console.log(typeof(typeImg))

    return encodeURI(typeImg)
    //return new URL (typeImg, import.meta.url).href
}


</script>


<template>
    <button @click="back" class="bg-danger text-light">Regresar</button>

    <body class="m-5">
        <h2>Pokemon: {{ $route.params.name }}</h2>

        <div class="card w-25">

            <img class="mt-2" :src="poke?.sprites?.other?.home?.front_default" :alt="`sprite_${poke.name}`">
            <ul class="mt-4 list-group">
                <li class="list-group-item">Número de pokedex:
                    <span class="badge text-bg-primary rounded-pill">{{ poke.id }}</span>
                </li>
                <li class="list-group-item ">Tipos:
                    <p v-for="(types, index) in poke.types" key="index"> {{ types?.type?.name }}
                        <img :src="getTypeIcon(types?.type?.name)" alt="type" width="45px" height="45px">
                        <!-- <img src="@/assets/icons_types/poison.png" width="45px" height="45px">
                        <img src="@/assets/icons_types/poison.png" alt="type" width="45px" height="45px"> -->

                    </p>
                </li>
            </ul>
        </div>

    </body>

</template>
