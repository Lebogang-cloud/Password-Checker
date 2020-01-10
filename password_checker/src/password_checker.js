function passwordIsValid (password) {
    try {
        if (password == "") throw ("password should exist");
        if (password.length < 8) throw ("password should be longer than than 8 characters");
        if (password.match(/[a-z]/g) == null) throw("password should have at least one lowercase letter");
        if (password.match(/[A-Z]/g) == null) throw("password should have at least one uppercase letter");
        if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]/g) == null) throw("password should have at least one special character");
        if (password.match(/[0-9]/g) == null) throw("password should at least have one digit");
    
        return password;
    }
    catch(error) {
        return error;
    }
}


function passwordIsOk(password){
    if((password != "" && password.length >= 8) && (
        (password.match(/[0-9]/g) == null) ||
        (password.match(/[$&+,:;=?@#|'<>.^*()%!-]+$/g) == null) ||
        (password.match(/[a-z]/g) == null) ||
        (password.match(/[A-Z]/g) == null))) {
        return true;
    } else {
        return false;
    }
}


module.exports = {
    passwordIsValid,
    passwordIsOk,
}