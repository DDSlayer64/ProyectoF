<script setup>
import Inicio from './Inicio.vue';

</script>

<template>
    <div class="todo w-screen h-[90vh] flex flex-col justify-start items-center pt-15">
        <div class="cajas bg-blue-500 w-[85vw] h-[80vh] flex items-center ">
            
            <div class="Foto w-[50%] h-[100] flex justify-center">
                <div class="w-[20vw] bg-white rounded-full aspect-square"></div>
            </div>

            <div class="DatosU w-[50%] h-[60%] space-y-10 flex flex-col justify-around">

                <h3 class="h3 p-4 rounded border text-white bg-blue-700 mr-20 border-gray-300">Nombre completo </h3>
                <h3 class="h3 p-4 rounded border text-white bg-blue-700 mr-20 border-gray-300">C.I.</h3>
                <h3 class="h3 p-4 rounded border text-white bg-blue-700 mr-20 border-gray-300">Rol</h3>
                <h3 class="h3 p-4 rounded border text-white bg-blue-700 mr-20 border-gray-300">Correo electrónico</h3>
            </div>
        </div>

    </div>
</template>


<style>
</style>