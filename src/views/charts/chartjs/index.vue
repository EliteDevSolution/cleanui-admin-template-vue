<template>
  <div>
    <div class="kit__utils__heading">
      <h5>
        <span class="mr-3">Chart.js</span>
        <a
          href="https://gionkunz.github.io/chartist-js/"
          target="_blank"
          class="btn btn-sm btn-light"
        >
          Official Documentation
          <i class="fe fe-corner-right-up" />
        </a>
      </h5>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Line Chart</strong>
            </h5>
            <div class="mb-5">
              <line-chart :chartdata="lineData" :options="lineOptions" :height="200" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Bar Chart</strong>
            </h5>
            <div class="mb-5">
              <bar-chart :chartdata="barData" :options="barOptions" :height="200" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Radar Chart</strong>
            </h5>
            <div class="mb-5">
              <radar-chart :chartdata="radarData" :options="radarOptions" :height="200" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Polar Chart</strong>
            </h5>
            <div class="mb-5">
              <polar-chart :chartdata="polarData" :options="polarOptions" :height="200" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Pie Chart</strong>
            </h5>
            <div class="mb-5">
              <pie-chart :chartdata="pieData" :options="pieOptions" :height="200" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <h5 class="mb-4">
              <strong>Doughnut Chart</strong>
            </h5>
            <div class="mb-5">
              <doughnut-chart :chartdata="doughnutData" :options="doughnutOptions" :height="200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'
import DoughnutChart from './DoughnutChart.vue'
import PieChart from './PieChart.vue'
import PolarChart from './PolarChart.vue'
import RadarChart from './RadarChart.vue'

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
}

const lineOptions = {
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
  },
  responsive: true,
}

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
}

const barOptions = {
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
}

const radarData = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
}

const radarOptions = {
  scale: {
    reverse: true,
    ticks: {
      beginAtZero: true,
    },
  },
}

const polarData = {
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      label: 'My dataset', // for legend
    },
  ],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
}

const polarOptions = {
  elements: {
    arc: {
      borderColor: '#4BC0C0',
    },
  },
}

const pieData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}

const pieOptions = {}

const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}

const doughnutOptions = {}

export default {
  components: {
    LineChart,
    BarChart,
    DoughnutChart,
    PieChart,
    PolarChart,
    RadarChart,
  },
  data: function () {
    return {
      lineData,
      lineOptions,
      barData,
      barOptions,
      radarData,
      radarOptions,
      polarData,
      polarOptions,
      pieData,
      pieOptions,
      doughnutData,
      doughnutOptions,
    }
  },
}
</script>
