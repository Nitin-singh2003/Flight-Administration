$(function(){
    $.getJSON("http://localhost:3000/flight/fetchallcities", function(data){
        $.each(data.result, function(index, item){
            $('#source').append($('<option>').text(item.cityname).val(item.cityid));
            $('#destination').append($('<option>').text(item.cityname).val(item.cityid));
        });
    });
});