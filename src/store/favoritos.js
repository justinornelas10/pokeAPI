import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore('favoritos', () => {

    const favoritos = ref([]) 

    if (localStorage.getItem('favorites')) {
        favoritos.value = JSON.parse(localStorage.getItem('favorites'))
    }

    const add = (poke) => {
        favoritos.value.push(poke)
        localStorage.setItem('favorites', JSON.stringify(favoritos.value))
    } 

    const remove =(id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem('favorites', JSON.stringify(favoritos.value))

    }

    const findPoke = (name) => {

        return favoritos.value.some((item) => item.name === name)
    }

    return {
        favoritos,
        add,
        remove,
        findPoke
    }
})

