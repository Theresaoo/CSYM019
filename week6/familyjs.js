function loadBarChart(){
    //chart variable ctx, use getContext to get canvas element-render block
    const ctx = document.getElementById('family').getContext('2d');
    
    //global options
   // Chart.defaults.global.defaultFontFamily ='Lato';
    Chart.defaults.font.size = 18;
    //Chart.defaults.global.defaultFontColor='#333';

    //setup block -create chart object(myChart)
    const family = new Chart(ctx, {
        //type: 'pie',
        type: 'bar',
        data: {
            labels: ['Mum', 'Dad', 'Richard', 'Aunt Susan', 'Mark', 'Jeff','Cousin Jack','Grandpa'],
            datasets: [{
                label: '# of Age',
                data: [70, 90, 45, 52, 22, 30, 15, 115],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                hoverBorderWidth:3,
                hoverBorderColor: '#000'

            }]
        },
        options: {
            //Horizontal display
            //indexAxis:'y',  
            scales: {
                y: {
                    beginAtZero: true  //starts the y-axis from zero
                }
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', loadBarChart);