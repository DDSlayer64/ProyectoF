<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const productos = ref([]);
    const mostrarFormulario = ref(false);
    const nuevoProducto = ref({
      nombre: '',
      talle: '',
      tipo: '',
      precioInicial: '',
      precioVenta: '',
      proveedor: '',
      descripcion: '',
      imagen: null,
      imagenUrl: ''
    });

    const abrirFormulario = () => {
      mostrarFormulario.value = true;
      nuevoProducto.value = {
        nombre: '',
        talle: '',
        tipo: '',
        precioInicial: '',
        precioVenta: '',
        proveedor: '',
        descripcion: '',
        imagen: null,
        imagenUrl: ''
      };
    };

    const manejarImagen = (event) => {
      const file = event.target.files[0];
      if (file) {
        nuevoProducto.value.imagen = file;
        nuevoProducto.value.imagenUrl = URL.createObjectURL(file);
      }
    };

    const agregarProducto = () => {
      if (
        nuevoProducto.value.nombre &&
        nuevoProducto.value.talle &&
        nuevoProducto.value.tipo &&
        nuevoProducto.value.precioInicial &&
        nuevoProducto.value.precioVenta &&
        nuevoProducto.value.proveedor &&
        nuevoProducto.value.descripcion
      ) {
        // Agregar copia del producto para evitar referencias
        productos.value.push({ ...nuevoProducto.value });
        mostrarFormulario.value = false;
      } else {
        alert('Por favor completa todos los campos');
      }
    };

    const cancelar = () => {
      mostrarFormulario.value = false;
    };

    return {
      productos,
      mostrarFormulario,
      nuevoProducto,
      abrirFormulario,
      manejarImagen,
      agregarProducto,
      cancelar
    };
  }
};
</script>

<template>
  <div
    class="
      h-[80vh]
      w-[95vw]
      flex
      flex-col
      items-end
      justify-start
      p-4
    "
  >
    <button
      class="
        bg-blue-800
        text-white
        fixed
        bottom-6
        right-6
        w-14
        h-14
        flex
        items-center
        justify-center
        rounded-full 
        shadow-lg
        text-2xl
      "
      @click="abrirFormulario">
      +
    </button>

    <div v-if="mostrarFormulario" class="mb-4 border p-4 rounded shadow w-full">
      <h3 class="mb-2 font-bold text-lg">Agregar nuevo producto</h3>
      <div class="mb-2">
        <label class="block mb-1">Nombre:</label>
        <input
          v-model="nuevoProducto.nombre"
          type="text"
          class="border rounded w-full p-1"
        />
      </div>
      <div class="mb-2">
        <label class="block mb-1">Talle:</label>
        <input
          v-model="nuevoProducto.talle"
          type="text"
          class="border rounded w-full p-1"
        />
      </div>
      <div class="mb-2">
        <label class="block mb-1">Tipo:</label>
        <input
          v-model="nuevoProducto.tipo"
          type="text"
          class="border rounded w-full p-1"
        />
      </div>
            <div class="mb-2">
        <label class="block mb-1">Precio Inicial:</label>
        <input
          v-model="nuevoProducto.precioInicial"
          type="text"
          class="border rounded w-full p-1"
        />
      </div>
            <div class="mb-2">
        <label class="block mb-1">Precio de Venta:</label>
        <input
          v-model="nuevoProducto.precioVenta"
          type="text"
          class="border rounded w-full p-1"
        />
      </div>
            <div class="mb-2">
        <label class="block mb-1">Proveedor:</label>
        <input
          v-model="nuevoProducto.proveedor"
          type="text"
          class="border rounded w-full p-1"
        />
      </div>
            <div class="mb-2">
        <label class="block mb-1">Descripción:</label>
        <input
          v-model="nuevoProducto.descripcion"
          type="text"
          class="border rounded w-full p-1"
        />
      </div>
      <div class="mb-2">
        <label class="block mb-1">Imagen:</label>
        <input type="file" @change="manejarImagen" accept="image/*" />
        <div v-if="nuevoProducto.imagenUrl" class="mt-2">
          <img
            :src="nuevoProducto.imagenUrl"
            alt="Preview imagen"
            class="max-h-24"
          />
        </div>
      </div>
      <div class="flex gap-2 mt-4">
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded"
          @click="agregarProducto"
        >
          Agregar
        </button>
        <button
          class="bg-blue-900 hover:bg-gray-400 text-white px-4 py-2 rounded"
          @click="cancelar"
        >
          Cancelar
        </button>
      </div>
    </div>

    <ul class="w-full">
      <li
        v-for="(producto, index) in productos"
        :key="index"
        class="border-b py-2 flex items-center gap-4"
      >
        <div v-if="producto.imagenUrl">
          <img
            :src="producto.imagenUrl"
            alt="Imagen producto"
            class="max-h-16"
          />
        </div>
        <div>
          <p><strong>Nombre:</strong> {{ producto.nombre }}</p>
          <p><strong>Talle:</strong> {{ producto.talle }}</p>
          <p><strong>Tipo:</strong> {{ producto.tipo }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>