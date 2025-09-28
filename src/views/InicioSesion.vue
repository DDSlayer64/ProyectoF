<script setup>
import Inicio from './Inicio.vue';
</script>

<template>
    <div class="odo  w-screen h-[90vh] flex flex-col justify-evenly items-center">
         <div class="h-[70vh] w-[60vw] flex">
        
            <div class="InicioS w-[40vw] h-[70vh] bg-blue-700 flex flex-col justify-center items-center p-10 text-white">
                <h3 class="text-2xl font-semibold mb-4">¿No tienes una cuenta?</h3>
                <router-link to="registro" class="bg-white text-blue-700 px-6 py-2 rounded hover:bg-gray-200 transition" >
                    Registrate
                </router-link>
            </div>
            <div class="Registro w-[60vw] h[100vh] p-10 bg-blue-500 flex flex-col justify-center">
                <h3 class="text-white text-3xl font-bold mb-6">Iniciar sesion</h3>
                <form action="" class="flex flex-col space-y-4">
                    <input type="texto" placeholder="Usuario" class="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <input type="password" placeholder="Contraseña" class="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <button type="submit" class="bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">Registrarse</button>
                </form>
            </div>
        </div>
    </div>
</template>