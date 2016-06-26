$(document).ready(function(){
    $('#callbackRequest').submit(function(event){
        event.preventDefault();
        $.ajax({
            url:'https://formspree.io/o.v.smirnova1987@gmail.com',
            type:'post',
            data:$('#callbackRequest').serialize(),
            dataType: 'json'
        }).error(function(jqXHR, status, error){
            $("#modalFormCallback").find(".error").fadeIn(100).delay(5000).fadeOut(5000);
        }).success(function(data, status, jqXHR) {
            $('#callbackRequest').find('input[name="name"], input[name="phone"], input[name="mail"], textarea[name="comment"]').val('');
            $("#modalFormCallback").find(".success").fadeIn(100).delay(5000).fadeOut(5000);
        });
    });

});
