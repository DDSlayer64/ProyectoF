<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import instanciaAxios from '../api/api'; //para conectar con tu backend

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
        productos.value.push({ ...nuevoProducto.value });
        mostrarFormulario.value = false;
      } else {
        alert('Por favor completa todos los campos');
      }
    };

    const cancelar = () => {
      mostrarFormulario.value = false;
    };

  
    // logica para registrar venta
    
    const mostrarModalVenta = ref(false);
    const productoSeleccionado = ref(null);
    const nuevaVenta = ref({
      cantidad: '',
      fecha: ''
    });

    const abrirModalVenta = (producto) => {
      productoSeleccionado.value = producto;
      mostrarModalVenta.value = true;
    };

    const cerrarModalVenta = () => {
      mostrarModalVenta.value = false;
      nuevaVenta.value = { cantidad: '', fecha: '' };
    };

    const registrarVenta = async () => {
      try {
        if (!nuevaVenta.value.cantidad || !nuevaVenta.value.fecha) {
          alert('Completa todos los campos de venta');
          return;
        }

      await instanciaAxios.post('/ventas', {
      producto_id: productoSeleccionado.id,
      cantidad: cantidad,
      fecha: new Date().toISOString().split('T')[0] 
    })


        alert('Venta registrada correctamente');
        cerrarModalVenta();
      } catch (error) {
        console.error(error);
        alert('Error al registrar la venta');
      }
    };

    return {
      productos,
      mostrarFormulario,
      nuevoProducto,
      abrirFormulario,
      manejarImagen,
      agregarProducto,
      cancelar,
      // venta
      mostrarModalVenta,
      productoSeleccionado,
      nuevaVenta,
      abrirModalVenta,
      cerrarModalVenta,
      registrarVenta
    };
  }
};
</script>

<template>
  <div class="h-[80vh] w-[95vw] flex flex-col items-end justify-start p-4">

    <!--boton agregar producto-->
    <button
      class="bg-blue-800 text-white fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-2xl"
      @click="abrirFormulario">
      +
    </button>

    <!--formulario nuevo producto-->
    <div v-if="mostrarFormulario" class="mb-4 border p-4 rounded shadow w-full">
      <h3 class="mb-2 font-bold text-lg">Agregar nuevo producto</h3>

      <!-- Campos del producto -->
      <div class="mb-2" v-for="(campo, key) in {
        nombre: 'Nombre',
        talle: 'Talle',
        tipo: 'Tipo',
        precioInicial: 'Precio Inicial',
        precioVenta: 'Precio de Venta',
        proveedor: 'Proveedor',
        descripcion: 'Descripción'
      }" :key="key">
        <label class="block mb-1">{{ campo }}:</label>
        <input v-model="nuevoProducto[key]" type="text" class="border rounded w-full p-1" />
      </div>

      <div class="mb-2">
        <label class="block mb-1">Imagen:</label>
        <input type="file" @change="manejarImagen" accept="image/*" />
        <div v-if="nuevoProducto.imagenUrl" class="mt-2">
          <img :src="nuevoProducto.imagenUrl" alt="Preview imagen" class="max-h-24" />
        </div>
      </div>

      <div class="flex gap-2 mt-4">
        <button class="bg-blue-600 text-white px-4 py-2 rounded" @click="agregarProducto">
          Agregar
        </button>
        <button class="bg-blue-900 hover:bg-gray-400 text-white px-4 py-2 rounded" @click="cancelar">
          Cancelar
        </button>
      </div>
    </div>

    <!-- Lista de productos -->
    <ul class="w-full">
      <li v-for="(producto, index) in productos" :key="index"
          class="border-b py-2 flex items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <div v-if="producto.imagenUrl">
            <img :src="producto.imagenUrl" alt="Imagen producto" class="max-h-16" />
          </div>
          <div>
            <p><strong>Nombre:</strong> {{ producto.nombre }}</p>
            <p><strong>Talle:</strong> {{ producto.talle }}</p>
            <p><strong>Tipo:</strong> {{ producto.tipo }}</p>
          </div>
        </div>

        <!--boton registrar venta -->
        <button
          @click="abrirModalVenta(producto)"
          class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
          Registrar venta
        </button>
      </li>
    </ul>

    <!-- modal de venta -->
    <div v-if="mostrarModalVenta" class="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div class="bg-white p-4 rounded-lg shadow-lg w-[300px]">
        <h2 class="text-lg font-bold mb-2">
          Registrar venta de {{ productoSeleccionado.nombre }}
        </h2>

        <input v-model="nuevaVenta.cantidad" type="number"
               placeholder="Cantidad vendida"
               class="border p-1 w-full mb-2" />

        <input v-model="nuevaVenta.fecha" type="date"
               class="border p-1 w-full mb-2" />

        <div class="flex justify-end gap-2">
          <button @click="registrarVenta" class="bg-green-600 text-white px-3 py-1 rounded">
            Guardar
          </button>
          <button @click="cerrarModalVenta" class="bg-gray-400 px-3 py-1 rounded">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
