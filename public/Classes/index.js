"use strict";
class UserClass {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}
const userFromClass = new UserClass('John', 'Kirby');
console.log(userFromClass);
userFromClass.name = 'Anna';
console.log(userFromClass);
class AdminClass extends UserClass {
    constructor(name, lastname, role) {
        super(name, lastname);
        this.role = role;
    }
}
const adminFromClass = new AdminClass('Valentina', 'Tereshkova', 1);
console.log(adminFromClass);
//# sourceMappingURL=index.js.map