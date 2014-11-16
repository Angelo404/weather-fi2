var get_loc = function(){
    var key = '3c95b384ba75192e0fe2057c1a672717358b0485';

    $.get('http://ipinfo.io/json', function(response){
        var city = response.city;
        var country = response.country;
        get_weather(1, city, country);
    }, "jsonp");
}

var get_weather = function(pos, city, country){
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+city+","+country+"&mode=json&units=metric&cnt=7", function(response){
        //$("#raw").html(JSON.stringify(response,null,4));
        var temp_list = [];
        var days_list = [];
        var weather_list = [];
        var rainfall_list = [];
        var pressure_list = [];

        for(var x = 0; x < response.list.length; x++){
            var tmp_date = new Date(response.list[x].dt * 1000);
            var tmp_temp = parseInt(response.list[x].temp.day);
            var tmp_rain = response.list[x].rain;
            var tmp_press = response.list[x].pressure;

            if( tmp_temp === undefined){
                temp_list.push(0);
            }
            if( tmp_rain === undefined){
                rainfall_list.push(0);
            }
            if( tmp_press === undefined){
                pressure_list.push(0);
            }

            tmp_date = reduce_date(tmp_date);

            temp_list.push(tmp_temp);
            days_list.push(tmp_date);
            rainfall_list.push(tmp_rain);
            pressure_list.push(tmp_press);
        }
        chart(pos, city, days_list, temp_list, rainfall_list, pressure_list);

    }, "jsonp")
    .done(function() {
        //alert( "second success" );
    });
}

var reduce_date = function(date){

    var d = date.toString();
    return d.substr(0, d.indexOf('GMT'));
}