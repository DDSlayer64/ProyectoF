<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'

export default {
  setup() {
    const productos = ref([]);

    const agregarProducto = () => {
      productos.value.push('Nuevo producto');
    };

    return {
      productos,
      agregarProducto
    };
  }
}; 
</script>

<template>
    <div class="
    h-[90vh]
    w[100vw]
    flex
    items-end
    justify-end   
    ">
        <button class="
        rounded-2xl
        aspect-square 
        h-[6vh] 
        text-center 
        border-blue-900 
        text-5xl 
        border-2
        
        " 
        
        @click="agregarProducto">+</button>
            <ul>
                <li v-for="(producto, index) in productos" :key="index">
                {{ producto }}
                </li>
            </ul>
    </div>
    
</template>