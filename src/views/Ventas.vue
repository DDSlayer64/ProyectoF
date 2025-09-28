<script setup>
import { RouterLink } from 'vue-router';
import { ref } from "vue";

const productos = ref([]);
const mostrarModal = ref(false);

const nuevoProducto = ref({
  descripcion: "",
  precio: "",
  cantidad: 1,
  fecha: "",
  imagen: null,
});

function onFileChange(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      nuevoProducto.value.imagen = event.target.result; // Base64 de la imagen
    };
    reader.readAsDataURL(file);
  }
}

function guardarProducto() {
  productos.value.push({ ...nuevoProducto.value });
  cerrarModal();
}

function cerrarModal() {
  mostrarModal.value = false;
  nuevoProducto.value = {
    descripcion: "",
    precio: "",
    cantidad: 1,
    fecha: "",
    imagen: null,
  };
}
</script>

<template>
  <div class="p-6">
    <div v-if="productos.length > 0" class="space-y-4 mb-6">
      <div
        v-for="(producto, index) in productos"
        :key="index"
        class="flex border rounded-lg p-4 shadow">
        <div
          class="w-32 h-32 flex items-center justify-center border mr-4 overflow-hidden">
          <img
            v-if="producto.imagen"
            :src="producto.imagen"
            alt="Imagen del producto"
            class="object-cover w-full h-full"/>
          <div v-else class="w-full h-full bg-gray-100"></div>
        </div>

        <div>
          <p class="font-bold">{{ producto.descripcion }}</p>
          <p>Precio: {{ producto.precio }}</p>
          <p>Cantidad: {{ producto.cantidad }}</p>
          <p>Fecha: {{ producto.fecha }}</p>
        </div>
      </div>
    </div>

    <button
      @click="mostrarModal = true"
      class="fixed bottom-6 right-6 bg-blue-800 text-white w-14 h-14 flex items-center justify-center text-2xl rounded-full shadow-lg hover:bg-gray-800">
      +
    </button>

    <div
      v-if="mostrarModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" >
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-bold mb-4">Agregar producto</h2>

        <form @submit.prevent="guardarProducto">
          <div class="mb-3">
            <label class="block text-sm font-medium">Descripción</label>
            <input
              v-model="nuevoProducto.descripcion"
              type="text"
              class="border rounded w-full p-2"
              required
            />
          </div>

          <div class="mb-3">
            <label class="block text-sm font-medium">Precio</label>
            <input
              v-model="nuevoProducto.precio"
              type="text"
              class="border rounded w-full p-2"
              required
            />
          </div>

          <div class="mb-3">
            <label class="block text-sm font-medium">Cantidad</label>
            <input
              v-model="nuevoProducto.cantidad"
              type="number"
              class="border rounded w-full p-2"
              required
            />
          </div>

          <div class="mb-3">
            <label class="block text-sm font-medium">Fecha</label>
            <input
              v-model="nuevoProducto.fecha"
              type="date"
              class="border rounded w-full p-2"
              required
            />
          </div>

          <div class="mb-3">
            <label class="block text-sm font-medium">Imagen</label>
            <input type="file" @change="onFileChange" class="w-full" />
          </div>

          <div class="flex justify-end space-x-2">
            <button
              type="button"
              @click="cerrarModal"
              class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Cancelar
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>