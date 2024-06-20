const ctx = document.getElementById('myChart').getContext('2d');
const addButton = document.querySelector('.add-button');
const inputFields = document.querySelector('.input-fields');
const xAxisInput = document.getElementById('x-axis');
const yAxisInput = document.getElementById('y-axis');

let labels = [],
  data = [];

const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels,
    datasets: [
      {
        label: '',
        data,
        backgroundColor: [
          '#FFC107',
          '#9C27B0',
          '#2196F3',
          '#4CAF50',
          '#F44336',
          '#795548',
          '#00BCD4',
        ],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    animation: {
      animateRotate: true,
      duration: 2000,
      easing: 'ease-in-out',
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontColor: '#333',
          fontSize: 14,
        },
      },
      title: {
        display: true,
        text: 'doughnutChart ',
      },
    },
  },
});

addButton.addEventListener('click', function () {
  const label = xAxisInput.value;
  const value = yAxisInput.value;

  if (label && value) {
    labels.push(label);
    data.push(Number(value));

    myChart.update();

    xAxisInput.value = '';
    yAxisInput.value = '';
  } else {
    alert('라벨과 값을 모두 입력해주세요.');
  }
});
