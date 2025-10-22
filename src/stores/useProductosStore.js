import { defineStore } from 'pinia'
import instanciaAxios from '@/api/api'

export const useProductosStore = defineStore('productos', {
  state: () => ({
    productos: []
  }),

  actions: {
    async cargarProductos() {
      try {
        const response = await instanciaAxios.get('/productos')
        this.productos = response.data
      } catch {
        this.productos = []
      }
    },

    async registrarProducto(nuevoProducto) {
      try {
        const response = await instanciaAxios.post('/productos', nuevoProducto)
        this.productos.push(response.data)
      } catch (error) {
        console.error('Error al registrar producto:', error)
      }
    }
  }
})
