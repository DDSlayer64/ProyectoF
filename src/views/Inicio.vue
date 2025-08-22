<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <h1>Esta es la vista de inicio</h1>
    <router-link to="segunda"> Ir a Segunda <br></router-link>
    <router-link to="usuario">Ir a Usuario <br></router-link>
</template>