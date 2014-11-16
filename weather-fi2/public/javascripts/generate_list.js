$( document ).ready( function(){
    $.ajax({
        type: "GET",
        url: "/assets/xml/capitals.xml",
        dataType: "xml",
        cache: false,
            success: function(xml) {
                var select = $('#cap-list');
                select.append('<option value="">Select a City</option>');
                $(xml).find('list cap').each(function(){
                    var make = $(this).text();
                    select.append("<option value='"+ make +"'>"+make+"</option>");
                });
            },
            error: function(xhr, status, error) {
                  alert(error);
            },
            complete: function(){
                var options = $('select#cap-list option');
                var arr = options.map(function(_, o) {
                    return {
                        t: $(o).text(),
                        v: o.value
                    };
                }).get();
                arr.sort(function(o1, o2) {
                    return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0;
                });
                options.each(function(i, o) {
                    console.log(i);
                    o.value = arr[i].v;
                    $(o).text(arr[i].t);
                });
            }
    });

    $( "#search-btn" ).click( function(){

        $( "#search-par" ).hide();

        var x = $('#cap-list').find(":selected").text();
        var city = (x.substr(0, x.indexOf(',')));
        var country = (x.substr(x.indexOf(',')+1, x.length));

        get_weather(0, city, country);

    });

});


