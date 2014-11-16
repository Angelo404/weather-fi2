var chart = function(pos, city, days, temp, rain, press){
    var g = '#008000';//Green - Pressure
    var r = '#B22222';//Red - Temperature
    var b = '#4682B4';//Blue - Rainfall
    var div = "";

    if( pos === 1){
        div = "#chart-container";
    }
    else{
        div = "#chart-container2";
    }

    $(div).highcharts({
        chart: {
            type: 'spline',
            zoomType: 'xy'
        },
        colors: [r, g, b], //Red, Blue, Green
        title: {
            text: '7 days forecast for ' + city,
            x: -20 //center
        },
        xAxis: {
            categories: days,               //['a', 'b', 'c'] //
        },
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: r
                }
            },
            title: {
                text: 'Temperature',
                format: '{value}  °C',
                style: {
                    color: r
                }
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Rainfall',
                style: {
                    color: b
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: b
                }
            }
        }, {
            title: {
                text: 'Pressure',
                style: {
                    color: g
                }
            },
            labels: {
                format: '{value} atm',
                style: {
                    color: g
                }
            }
        }],
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Temperature',
            type: 'spline',
            data: temp,                 //[5,5,5],
            tooltip: {
                valueSuffix: ' °C'
            }
        }, {
            name: 'Pressure',
            type: 'spline',
            yAxis: 2,
            data: press,                //[7,4,1],
            tooltip: {
                valueSuffix: ' atm'
            }
        }, {
            name: 'Rainfall',
            type: 'spline',
            yAxis: 1,
            data: rain,                 //[1,2,3], //
            tooltip: {
                valueSuffix: ' mm'
            }
        }]
    });
}