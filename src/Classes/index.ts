class UserClass {
    name: string;
    lastname: string;
    constructor(name: string, lastname: string) {
        this.name = name;
        this.lastname = lastname;
    }
}
const userFromClass = new UserClass('John', 'Kirby')
console.log(userFromClass);
userFromClass.name = 'Anna'; 
console.log(userFromClass);

class AdminClass extends UserClass {
    role: number;
    constructor(name: string, lastname: string, role: number) {
        super(name, lastname);
        this.role = role;
    }
}

const adminFromClass = new AdminClass('Valentina', 'Tereshkova', 1);
console.log(adminFromClass);