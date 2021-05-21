$("#formulario1").validate({
    rules:{
        "txtEmail":{
            required: true,
            email: true
        },
        "txtContrasenia": {
            required: true,
            minlength: 5
        }


    },

    messages: {
        "txtEmail": {
            required: 'Ingrese mail!!',
            email: 'No cumple formato'
        },
        "txtContrasenia":{
            required: 'Ingresa la contrasenia!!',
            minlength: 'Minimo 5 caracteres'
        }

    }
})