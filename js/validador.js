$("#formulario1").validate({
    rules:{
        "txtEmail":{
            required: true,
            email: true
        },
        "txtContrasenia": {
            required: true,
            minlength: 5
        },

        "txtRepetirContra": {
            required: true,
            equalTo: '#id_txtContrasenia'
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
        },
        "txtRepetirContra": {
            required: 'Repita el Password!!',
            equalTo: ' deben ser iguales!!!!'
                    }        

    }
})