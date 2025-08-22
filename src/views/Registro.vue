<script setup>
import Inicio from './Inicio.vue';
</script>

<template>
    <div class="todo w-screen h-[90vh] flex flex-col justify-evenly items-center">
        <div class="h-[70vh] w-[60vw] rounded-lg shadow-lg overflow-hidden flex">
           
           <div class="w-[60vw] h-[70vh] bg-blue-500 p-10 flex flex-col justify-center">
        <h3 class="text-3xl text-white font-bold mb-6">Registrarse</h3>
        <form action="" class="flex flex-col space-y-4">
          <input type="text" placeholder="Usuario(C.I.)" class="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="text" placeholder="Nombre completo" class="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="email" placeholder="Correo electrónico" class="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="password" placeholder="Contraseña" class="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <button type="submit" class="bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">Registrarse</button>
        </form>
      </div>
            <div class="w-[40vw] h-full bg-blue-700 flex flex-col justify-center items-center p-10 text-white">
             <h3 class="text-2xl font-semibold mb-4">¿Ya tienes una cuenta?</h3>
            <router-link to="/iniciosesion" class="bg-white text-blue-700 px-6 py-2 rounded hover:bg-gray-200 transition">
          Iniciar sesión
        </router-link>          
            </div>
        </div>
    </div>
</template>