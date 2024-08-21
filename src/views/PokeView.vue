<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

import axios from 'axios'
const route = useRoute()
const router = useRouter()

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
    // Cargamos todas las imágenes disponibles al inicio
    const icons = import.meta.glob('@/assets/icons_types/*.png', { eager: true });

    switch (typeName) {
        case 'fire':
            return icons['/src/assets/icons_types/fire.png'];
        case 'water':
            return icons['/src/assets/icons_types/water.png'];
        case 'grass':
            return icons['/src/assets/icons_types/grass.png'];
        default:
            return icons['/src/assets/icons_types/rock.png'];
    }
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
                    <p v-for="types in poke.types"> {{ types?.type?.name }}
                    <!-- <img src="../assets/icons_types/dragon.png"  alt=""
                        width="30" height="30">  -->
                    <!-- <img v-for="types in poke.types" :src="getTypeIcon(`${types.type.name}`)" alt="type"> -->
                    <img :src="getTypeIcon(types?.type?.name)" alt="type">

                </p>
                </li>
            </ul>
        </div>

    </body>

</template>
