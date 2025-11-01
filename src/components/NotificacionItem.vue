<template>
  <div class="notificacion">
    <strong>[{{ notificacion.tipo.toUpperCase() }}]</strong>
    <span>{{ notificacion.mensaje }}</span>
    <small> ({{ notificacion.fecha }})</small>
    <button @click="eliminar">X</button>
  </div>
</template>

<script setup>
import { notificaciones } from '../helpers/notificaciones.js'
const props = defineProps({
  notificacion: Object
})

function eliminar() {
  notificaciones.eliminar(props.notificacion.id)
}
</script>

<style scoped>
.notificacion {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 6px;
}
button {
  float: right;
  background: none;
  border: none;
  color: red;
  cursor: pointer;
}
</style>
