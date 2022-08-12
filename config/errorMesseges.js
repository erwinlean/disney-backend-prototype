'use strict';
//error handler

module.exports={
    //general errors
    general:{
        campo_obligatorio:"El campo {PATH} es obligatorio",
        minLength:"El campo {PATH} debe contener al menos {VALUE}"
    },
    //user errors
    users:{
        passwordIncorrect:"El {PATH} debe contener al menos 1 letra, y una letra",
        passMinLength:"El campo {PATH} debe contener al menos {VALUE}"
    },
    //errors if path doesnt exist on the files
    path:{
        nonExistentPath:"Error 404: The path file selected is missing"
    },
    //errors if method is not what it should be
    method:{
        methodDontMatch:"Error, method not supported here"
    }
};