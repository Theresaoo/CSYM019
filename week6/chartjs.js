function loadBarChart(){
    //chart variable ctx, use getContext to get canvas element-render block
    const ctx = document.getElementById('myChart').getContext('2d');
    
    
    //setup block -create chart object(myChart)
    const myChart = new Chart(ctx, {
        //type: 'pie',
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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