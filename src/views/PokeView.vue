<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from "@/composables/getData";
import { useFavoritesStore } from "@/store/favoritos.js";

const route = useRoute()
const router = useRouter()
const useFavoritos = useFavoritesStore()
const {add} = useFavoritos
const {findPoke} = useFavoritos



const {data, getData, loading, error} = useGetData()


const back = () => {
    router.push('/pokemons')
}


getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)


function getTypeIcon(typeName) {
    const typeImg = `/src/assets/icons_types/${typeName}.png`

    return encodeURI(typeImg)
}

// function iconFav(){

// }

</script>


<template>
    <button @click="back" class="bg-danger text-light mt-2">Regresar</button>
    <p v-if="loading">CARGANDO INFORMACIÓN.......</p>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>

    <body v-if="data" class="m-5">
        <h2>Pokemon: {{ $route.params.name }}</h2>

        <div class="card w-25 ">
            <img class="mt-2" :src="data?.sprites?.other?.home?.front_default" :alt="`sprite_${data?.name}`">
            <button :disabled="findPoke(data?.name)" class="btn mb-2 position-absolute top-0 end-0" @click="add(data)" >
                <img v-if="findPoke(data.name)" src="@/assets/favorite.svg" alt="favorite" width="24px" height="24px">
                <img v-else src="@/assets/non-favorite.svg" alt="non-favorite" width="24px" height="24px">

            </button>
            <ul class="mt-4 list-group">
                <li class="list-group-item">Número de pokedex:
                    <span class="badge text-bg-primary rounded-pill">{{ data?.id }}</span>
                </li>
                <li class="list-group-item ">Tipos:
                    <p v-for="(types, index) in data?.types" key="index" class="ps-5"> 
                        {{ types?.type?.name }}
                        <img :src="getTypeIcon(types?.type?.name)" alt="type" width="45px" height="45px">
                    </p>
                </li>
            </ul>
        </div>

    </body>

</template>
