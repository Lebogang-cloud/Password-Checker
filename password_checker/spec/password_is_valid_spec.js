let password = require("../src/password_checker")

describe("Check if password is valid", function() {
    it("it throws an error when password is an empty string", function() {
        expect(password.passwordIsValid("")).toBe("password should exist")
    })

    it("password should at least have eight characters", function() {
        expect(password.passwordIsValid("sdRa")).toBe("password should be longer than than 8 characters")
    })

    it("password should at least have one lowerCase", function() {
        expect(password.passwordIsValid("1235R76585")).toBe("password should have at least one lowercase letter")
    })

    it("password should at least have one uppercase", function() {
        expect(password.passwordIsValid("2@tw!edr")).toBe("password should have at least one uppercase letter")
    })

    it("password should at least have one number", function() {
        expect(password.passwordIsValid("zsdawdfasgtsrhA@$")).toBe("password should at least have one digit")
    })

    it("password should at least have one special character", function() {
        expect(password.passwordIsValid("aA456465W7A4697f")).toBe("password should have at least one special character")
    })
});