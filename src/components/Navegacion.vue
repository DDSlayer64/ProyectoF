<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navegacion w-[100vw] h-[10vh] bg-blue-500 flex flex-row">
        <router-link to="notificaciones" class="hover:bg-blue-800 px-2 w-[5%] bg-blue-700 rounded m-0.5 text-white border-2 border-gray-300">Notificaciones
            
        </router-link>
        <div class="w-[70%] h-[100%]"></div>
        <router-link to="notas" class="hover:bg-blue-800 px-2 w-[5%] bg-blue-700 m-0.5 text-white border-2 border-gray-300">Notas
            
        </router-link>
        <router-link to="productos" class="hover:bg-blue-800 px-2 w-[5%] bg-blue-700 m-0.5 text-white border-2 border-gray-300">Productos

        </router-link>
        <router-link to="ventas" class="hover:bg-blue-800 px-2 w-[5%] bg-blue-700 m-0.5 text-white border-2 border-gray-300">Ventas

        </router-link>
        <router-link to="balance" class="hover:bg-blue-800 px-2 w-[5%] bg-blue-700 m-0.5 text-white border-2 border-gray-300">Balance 

        </router-link>
        <router-link to="usuario" class="hover:bg-blue-800 px-2 w-[5%] bg-blue-700 m-0.5 text-white border-2 border-gray-300">Usuario

        </router-link>
        
    </nav>
</template>

