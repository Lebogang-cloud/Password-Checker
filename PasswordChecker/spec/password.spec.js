let password = require("../src/password")

describe("Check if password is valid", function() {
    // password = 'Lebo1447@!';
  
    it("it throws an error when password is an empty string", function() {
        expect(password.passwordIsVaild("")).toBe("should not be empty")
    })

    it("password should at least have eight characters", function() {
        expect(password.passwordIsVaild("sda")).toBe("password should at least have eight characters")
    })

    it("password should at least have one lowerCase", function() {
        expect(password.passwordIsVaild("123576585")).toBe("password should at least have one lowercase")
    })

    it("password should at least have one uppercase", function() {
        expect(password.passwordIsVaild("a45646574697f")).toBe("password should at least have one uppercase")
    })

    it("password should at least have one special character", function() {
        expect(password.passwordIsVaild("a4564657AS4697f")).toBe("password should at least have special characters")
    })

    it("password should at least have one number", function() {
        expect(password.passwordIsVaild("zsdawdfasgtsrhA@")).toBe("password should a number from 0-9")
    })

  })

