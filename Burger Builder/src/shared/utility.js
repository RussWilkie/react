export const updateObject = (oldObject, updatedProperties) =>{
    return{
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, rules) =>{
    let isValid = true;
    
    //Checks validation
    if(!rules){
        return true;
    }
    
    if(rules.required){
        isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength){
        isValid = value.length >= rules.minLength&& isValid;
    }
    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
}