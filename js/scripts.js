
//form validation
function validate(){
    var zip = $("#zipcode").val();
    if (isNaN(zip)) {
        alert("Zip code is not valid. Please enter a new zip code");
        return false;
    }
}

//tabs for the celebrations page
// function openTab(evt, celebrationName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(celebrationName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

//graph for Downtown
    $(function() {
        $('#container-graph-downtown').highcharts({
            title: {
                text: 'Popular Times',
                x: -20 //center
            },
            xAxis: {
                title: {
                    text: 'Time',
                },
                categories: ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
            },
            yAxis: {
                title: {
                    text: 'Number of people (on average)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                showInLegend: false,
                name: 'Downtown location',
                data: [24, 12, 16, 8, 11, 19, 15, 18, 13, 21, 35]
            }]
        });
    });

//graph for Shadyside
    $(function() {
        $('#container-graph-shadyside').highcharts({
            title: {
                text: 'Popular Times',
                x: -20 //center
            },
            xAxis: {
                title: {
                    text: 'Time',
                },
                categories: ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
            },
            yAxis: {
                title: {
                    text: 'Number of people (on average)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                showInLegend: false,
                name: 'Shadyside location',
                data: [10, 8, 24, 5, 7, 32, 16, 18, 27, 39, 32]
            }]
        });
    });

//internal data visualization
$(document).ready(function () {

    // Build the chart
    Highcharts.chart('graph1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Most Popular Items (Jan 2016 - Dec 2016)'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Proportion',
            colorByPoint: true,
            data: [{
                name: 'Red Velvet Cup',
                y: 20.03
            }, {
                name: 'Burnt Almond Torte',
                y: 36.66,
                sliced: true,
                selected: true
            }, {
                name: 'Almond Coffee Cake',
                y: 10.38
            }, {
                name: 'Coconut Chocolate Macaroon',
                y: 4.77
            }, {
                name: 'Apple Strudel',
                y: 3.91
            }, {
                name: 'Other',
                y: 25.43
            }]
        }]
    });
});


    //slideshow
    $(window).load(function(){
        var pages = $('#slideshow li'), current=0;
        var currentPage,nextPage;

        $('#slideshow .button').click(function(){
            currentPage= pages.eq(current);
            if($(this).hasClass('prevButton'))
            {

                if (current <= 0)
                    current=pages.length-1;
                else
                    current=current-1;
            }
            else
            {
                if (current >= pages.length-1)
                    current=0;
                else
                    current=current+1;
            }
            nextPage = pages.eq(current);   
            currentPage.hide(); 
            nextPage.show();        
        });
});
