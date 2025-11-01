<script setup>
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import axios from 'axios';
import { Bar } from 'vue-chartjs';  // Asegúrate de importar Bar correctamente
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const fechaInicio = ref('2025-01-01');  
const fechaFin = ref('2050-12-31');     

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Ganancias ($)',
      data: [],
      backgroundColor: 'rgba(255, 215, 0, 0.7)',
      borderColor: 'rgba(0, 0, 0, 0.8)',
      borderWidth: 1.5,
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Ganancias por Fecha' },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

async function cargarGanancias() {
  if (!fechaInicio.value || !fechaFin.value) return;

  try {
    const response = await axios.get('http://localhost:8000/api/ventas', {
      params: {
        inicio: fechaInicio.value,
        fin: fechaFin.value,
      },
    });

    const ventas = response.data; 

    chartData.value = {
      labels: ventas.map(v => v.fecha),
      datasets: [
        {
          label: 'Ganancias ($)',
          data: ventas.map(v => v.monto),
          backgroundColor: 'rgba(255, 215, 0, 0.7)',
          borderColor: 'rgba(0, 0, 0, 0.8)',
          borderWidth: 1.5,
        },
      ],
    };
  } catch (error) {
    console.error('Error al cargar las ganancias:', error);
    alert('Error al cargar los datos. Verifica la consola para más detalles.');
  }
}

watch([fechaInicio, fechaFin], ([inicio, fin]) => {
  if (inicio && fin && fin < inicio) {
    alert('La fecha final no puede ser menor que la inicial.');
    fechaFin.value = '';
    return;
  }
  if (inicio && fin) {
    cargarGanancias();
  }
});
</script>

<template>
  <div class="w-[100vw] h-[90vh] flex flex-col items-center justify-evenly">
    <div class="w-[30vw] h-[8vh] flex flex-row">
      <div class="flex justify-center w-[100%] bg-blue-700 rounded text-white">
        <div class="w-[50%] border border-white">
          <input v-model="fechaInicio" type="date"
                 id="start"
                 name="trip-start"
                 value="2025-01-01"
                 min="2025-01-01"
                 max="2050-12-31"
                 class="text-white">
        </div>
        <div class="w-[50%] border border-white">
          <input v-model="fechaFin" :min="fechaInicio" type="date"
                 id="start"
                 name="trip-start"
                 value="2025-01-01"
                 min="2025-01-01"
                 max="2050-12-31"
                 class="text-white">
        </div>
      </div>
    </div>
    <div class="w-[60vw] h-[60vh] bg-amber-400">
      <Bar :data="chartData" :options="chartOptions" class="w-full h-full" />
    </div>
  </div>
</template>