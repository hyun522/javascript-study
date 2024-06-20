const barChart = document.getElementById('barChart');
const doughnutChart = document.getElementById('doughnutChart');

new Chart(barChart, {
type: 'bar',
data: {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
    label: '사과 판매량',
    data: [12, 19, 13, 15, 12, 23],
    borderWidth: 1,
    backgroundColor: 'rgba(252,150,150, 0.6)',
    borderColor: 'rgba(252,150,150, 0.9)',
    barThickness: 40,
    maxBarThickness: 30,
    hoverBorderWidth: 2,
        hoverBackgroundColor: 'rgba(252,150,150, 1)',
        hoverBorderColor:'rgba(280,150,150, 1)'
    },
    {
    label: '수박 판매량',
    data: [22, 5, 18, 20, 14, 6],
    borderWidth: 1,
    backgroundColor: 'rgba(171,238,164,0.6)',
    borderColor: 'rgba(171,238,164,0.9)',
    barThickness: 40,
    maxBarThickness: 30,    
    hoverBorderWidth: 2,
    hoverBackgroundColor: 'rgba(171,238,164,1)',
    hoverBorderColor:'rgba(171,238,164,1)'
    
    }]
},
    options: {
        responsive: false,
        animation: {
            duration: 2000,
            easing: 'easeInOutBack'
    },          
    scales: {
        y: {
        beginAtZero: true
        }
        },
        plugins: {
            title: {
                display: true,
                text: '사과 수박 판매량',
                color: '#333',
                font: {
                    size: 20,
                    weight: 'bold'
                }
            }                       
        }
    }
});

new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['찬성','반대','의견없음'],
        datasets: [{
            label: '사과 판매량',
            data: [60, 30, 10],
            backgroundColor: ['#146152', '#B4CF66', '#FFEC5C'],
            hoverOffset: 10,
        }]
    },
    options: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: '사과 수박 판매할까요?',
                color: '#333',
                font: {
                    size: 20,
                    weight: 'bold'
                }
            }   
        },
        cutout:'30%',
        animation: {
            duration: 1000,
            easing: 'easeInOutSine'
        },     
        scale: {
            ticks: {
                beginAtZero: true,
                fixedStepSize: 25,   
            }
        },       
            
        }
    });