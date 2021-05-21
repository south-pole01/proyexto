jQuery(document).ready(function () {
    $("#vercontra").on('click', function () {
 
        var pass = $("#id_txtContrasenia");
        var pass2 = $("#id_txtRepetirContra");
 
        var fieldtype = pass.attr('type');
        var fieldtype2 = pass2.attr('type');
 
        if (fieldtype == 'password' & fieldtype2 == 'password') {
            pass.attr('type', 'text');
            pass2.attr('type', 'text');
            $(this).text("Ocultar contrasenia");
        } else {
            pass.attr('type', 'password');
            pass2.attr('type', 'password');
            $(this).text("Ver Contrasenia");
        }
 
    });
 
});
