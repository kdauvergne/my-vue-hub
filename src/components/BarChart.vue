<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />

  <div class="card-actions justify-center gap-4 mt-4">
    <button class="btn btn-accent" @click="ajouter50">Ajouter +50</button>
    <button class="btn btn-accent" @click="ajouterAleatoire">
      Valeur aléatoire
    </button>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
        datasets: [
          {
            label: "Ventes (€)",
            data: [1200, 1400, 1600, 2000, 1800],
            backgroundColor: "lightblue",
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    ajouter50() {
      const nouvellesValeurs = this.chartData.datasets[0].data.map(
        (v) => v + 50,
      );

      this.chartData = {
        labels: this.chartData.labels,
        datasets: [
          {
            label: "Ventes (€)",
            backgroundColor: "lightblue",
            data: nouvellesValeurs,
          },
        ],
      };
    },
    ajouterAleatoire() {
      const nouvellesValeurs = this.chartData.datasets[0].data.map((v) =>
        Math.floor(Math.random() * 2000),
      );

      this.chartData = {
        labels: this.chartData.labels,
        datasets: [
          {
            label: "Ventes (€)",
            backgroundColor: "lightblue",
            data: nouvellesValeurs,
          },
        ],
      };
    },
  },
};
</script>
