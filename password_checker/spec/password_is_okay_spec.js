let password = require("../src/password_checker")

describe("check Password is okay", function() {
    it("returns true if password is okay", function() {
        expect(password.passwordIsOk('a45646@57AS4697f')).toBe(true);
    });

    it("returns false if password is not okay", function() {
        expect(password.passwordIsOk('Drt4')).toBe(false);
    });  
})
