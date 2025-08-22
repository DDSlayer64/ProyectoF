import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Segunda from '../views/Segunda.vue'
import Usuario from '../views/Usuario.vue'
import Balance from '../views/Balance.vue'
import Notificaciones from '../views/Notificaciones.vue'
import Notas from '../views/Notas.vue'
import Ventas from '../views/Ventas.vue'
import Productos from '../views/Productos.vue'
import InicioSesion from '../views/InicioSesion.vue'
import Registro from '../views/Registro.vue'

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:[
            {
                path:"/inicio",
                component: Inicio,
                name: 'inicio'
            },
            {
                path:"/segunda",
                component: Segunda,
                name: 'segunda'
            },
            {
                path:"/usuario",
                component: Usuario,
                name: 'usuario'
            },
            {
                path:"/balance",
                component: Balance,
                name: 'balance'
            },
            {
                path:"/notas",
                component: Notas,
                name: 'notas'
            },
            {
                path:"/notificaciones",
                component: Notificaciones,
                name: 'notificaciones'
            },
            {
                path:"/productos",
                component: Productos,
                name: 'productos'
            },
            {
                path:"/ventas",
                component: Ventas,
                name: 'ventas'
            },
            {
                path:"/iniciosesion",
                component: InicioSesion,
                name: 'iniciosesion'
            },
            {
                path:"/registro",
                component: Registro,
                name: 'registro'
            }
        ]
    }
)

export default router