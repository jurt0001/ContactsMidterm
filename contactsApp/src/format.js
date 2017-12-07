export function getAge(birthday){
    let dateDifMs = new Date(Date.now() - new Date(birthday).getTime());
    return Math.abs(dateDifMs.getUTCFullYear() - 1970);
}

export function dob(dob){
   
    return dob.substring(0,10);
}

export function caps(name){
    
    return name.charAt(0).toUpperCase() + name.slice(1);
    
}