const setup = async () => {
  const dataTemps = await getData();
  
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataTemps.years,
      datasets: [
        {
          label: 'Global Temperature in °C',
          data: dataTemps.temps,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Northern Hemisphere Temperature in °C',
          data: dataTemps.northern,
          fill: false,
          borderColor: 'rgba(99, 132, 255, 1)',
          backgroundColor: 'rgba(99, 132, 255, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Souther Hemisphere in °C',
          data: dataTemps.southern,
          fill: false,
          borderColor: 'rgba(99, 255, 132, 1)',
          backgroundColor: 'rgba(99, 255, 132, 0.5)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            callback: function (value, index, values) {
              return value + '°';
            }
          }
        }]
      }
    }
  });
};

const getData = async () => {
  const response = await fetch('/assets/text/ZonAnn.Ts+dSST_test.csv');
  const data = await response.text();
  
  const years    = [];
  const temps    = [];
  const northern = [];
  const southern = [];
  
  const rows = data.split('\n').slice(1);
  
  rows.forEach(row => {
    const cols = row.split(',');
    years.push(cols[0]);
    temps.push(14 + parseFloat(cols[1]));
    northern.push(14 + parseFloat(cols[2]));
    southern.push(14 + parseFloat(cols[3]));
  });
  
  return { years, temps, northern, southern };
};

setup();
// ==============================================================================================================================================================================================================================================================