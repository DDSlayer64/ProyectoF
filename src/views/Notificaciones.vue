<template>
  <div>
    <h2>Notificaciones</h2>

    <div v-if="notificaciones.lista.length === 0">
      <p>No hay notificaciones.</p>
    </div>

    <div v-else>
      <NotificacionItem
        v-for="n in notificaciones.lista"
        :key="n.id"
        :notificacion="n"
      />
    </div>
  </div>
</template>

<script setup>
import { notificaciones } from '../helpers/notificaciones.js'
import NotificacionItem from '../components/NotificacionItem.vue'
</script>
