// src/helpers/notificaciones.js
import { reactive } from 'vue'

export const notificaciones = reactive({
  lista: [],

  agregar(mensaje, tipo = 'info') {
    const id = Date.now()
    this.lista.push({
      id,
      mensaje,
      tipo,
      fecha: new Date().toLocaleString()
    })
  },

  eliminar(id) {
    this.lista = this.lista.filter(n => n.id !== id)
  },

  limpiar() {
    this.lista = []
  }
})
