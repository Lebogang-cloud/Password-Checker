function passwordIsVaild (password) {
    
    try {
        if (password == "") throw ("should not be empty")
        if (password.length < 8) throw ("password should at least have eight characters")
        if (password.match(/[a-z]/g) == null) throw("password should at least have one lowercase")
        if (password.match(/[a-z]/g) == null) throw("password should at least have one uppercase")
        if (password.match(/[^0-9a-zA-Z]/g) == null) throw("password should at least have special characters")
        if (password.match(/[0-9]/g) == null) {throw("password should a number from 0-9")}
        else{
            return password;
        }  
        
    }
    catch(error){
        return error;
    }
    
}

function passwordISOk(password){

    if((password != "" && password.length >= 8) && ((password.match(/[0-9]/g) == null) || (password.match(/[^0-9a-zA-Z]/g) == null) ||(password.match(/[a-z]/g) == null) || (password.match(/[a-z]/g) == null))){
        return true;
    }
    else{
        return false;
    }
}
    

module.exports = {
    passwordIsVaild,
    passwordISOk
}
