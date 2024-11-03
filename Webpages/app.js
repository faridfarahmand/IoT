$(document).ready(function() {
    $.ajax({
        url: "https://yourWebpage.com/data.php", // location of the datafile
        method: "GET",
        success: function(data) {
            console.log(data); // Log the raw data
            var labels = []; // Labels for the chart
            var values = []; // Values for the chart

            // Check for errors in the response
            if (data.error) {
                console.error(data.error);
                return; // Exit if there's an error
            }

            for (var i in data) {
                labels.push("N:" + data[i].time_received); // match dBase columns
                values.push(data[i].light);
            }

            var chartdata = {
                labels: labels,
                datasets: [
                    {
                        label: 'Light',
                        backgroundColor: 'rgba(0, 128, 0, 0.5)', // Fill background color
                        borderColor: 'rgba(0, 128, 0, 1)', // Border color
                        pointBackgroundColor: 'rgba(0, 128, 0, 1)', // Point background color
                        pointBorderColor: 'rgba(0, 128, 0, 1)', // Point border color
                        borderWidth: 1,
                        data: values
                    }
                ]
            };

            var ctx = $("#mycanvas");
            var lineChart = new Chart(ctx, {
                type: 'bar', // Chart type
                data: chartdata,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    }
                }
            });
        },
        error: function(data) {
            console.log("AJAX error:", data);
        }
    });
});
// JavaScript source code