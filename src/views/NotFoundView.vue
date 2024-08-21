<script setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

const back = () => {
    router.push('/')
}

</script>

<template>
    <button @click="back" class="bg-danger text-light">Regresar</button>

    <h1>404</h1>
</template>