export const createControl =(config, validation) =>{
    return{
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export const  validate =(value, validation = null) =>{
    if (!validation){
        return true
    }

    let  isValid = true

    if (validation.required){
        isValid = value.trim() !== '' && isValid
    }

    return isValid
}

export const validateForm = formControls=>{
    let isFormValid = true

    for (let validateKey in formControls) {
        if (formControls.hasOwnProperty(validateKey)){
            isFormValid = formControls[validateKey].valid && isFormValid
        }
    }

    return isFormValid


}