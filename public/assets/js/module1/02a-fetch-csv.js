const setup = async () => {
  const dataTemps = await getData();
  
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataTemps.years,
      datasets: [{
        label: 'Global Temperature in °C',
        data: dataTemps.temps,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false
      }]
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
  
  const years = [];
  const temps = [];
  
  const rows = data.split('\n').slice(1);
  
  rows.forEach(row => {
    const cols = row.split(',');
    years.push(cols[0]);
    temps.push(14 + parseFloat(cols[1]));
  });
  
  return { years, temps };
};

setup();
// ==============================================================================================================================================================================================================================================================