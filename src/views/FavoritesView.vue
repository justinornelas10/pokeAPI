<script setup>
import { useFavoritesStore } from "@/store/favoritos.js";
import { storeToRefs } from "pinia";
import { useRouter, RouterLink } from "vue-router";

const router = useRouter()
const useFavoritos = useFavoritesStore()
const { favoritos } = storeToRefs(useFavoritos)
const {remove} = useFavoritos

function getTypeIcon(typeName) {
    const typeImg = `/src/assets/icons_types/${typeName}.png`

    return encodeURI(typeImg)
}

const back = () => {
    router.push('/pokemons')
}

</script>

<template>
    <button @click="back" class="bg-danger text-light mt-2">Regresar</button>

    <h1>Favoritos</h1>
    <div class="alert alert-danger" v-if="favoritos.length == 0">No hay pokemon favoritos :(</div>
    
    <div class="row row-cols-auto gap-4" v-else>
        <div class="card mx-4" style="width: 20%;" v-for="poke in favoritos" :key="poke.id">
            <img class="mt-2" :src="poke?.sprites?.other?.home?.front_default" :alt="`sprite_${poke?.name}`">

            <h2 class="text-capitalize mt-2 fw-lighter font-monospace">
                <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" :to="`/pokemons/${poke.name}`">
                    {{ poke.name }}
                </RouterLink> 
            </h2>

            <button class="btn mb-2 position-absolute top-0 end-0" @click="remove(poke.id)" >
                <img src="@/assets/favorite.svg" alt="favorite" width="24px" height="24px"
                    class="mb-2 position-absolute top-0 end-0">
            </button>
    
            <ul class="mt-4 list-group">
                <li class="list-group-item">Número de pokedex:
                    <span class="badge text-bg-primary rounded-pill">{{ poke?.id }}</span>
                </li>
                <li class="list-group-item ">Tipos:
                    <p v-for="(types, index) in poke?.types" key="index" class="ps-5">
                        {{ types?.type?.name }}
                        <img :src="getTypeIcon(types?.type?.name)" alt="type" width="45px" height="45px">
                    </p>
                </li>
            </ul>
            
        </div>

    </div>
</template>
