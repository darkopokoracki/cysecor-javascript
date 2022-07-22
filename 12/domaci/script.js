const zarada = document.querySelector('#zarada');

new Chart(zarada, {
    type: 'bar',
    data: {
        labels: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun'],
        datasets: [
            {
                label: 'Prihodi',
                data: [1000, 1200, 900, 1700, 1660, 2100],
                backgroundColor: 'rgba(0, 204, 0, 1)'
            },
            {
                label: 'Troskovi',
                data: [-700, -1500, -100, -900, -700, -200],
                backgroundColor: 'rgba(178, 34, 34, 1)'
            }
        ]
    },

    options: {
      indexAxis: 'y',

      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },

        title: {
          display: true,
          text: 'Ovaj chart prikazuje zaradu i troskove od januara do juna'
        }
      }
    },
});