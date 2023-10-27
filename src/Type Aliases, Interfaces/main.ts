type User = {
    name: string;
    lastname: string;
    age: number;
    skills: string[];
}

type StringOrNumber = string | number;

type Role = {
    id: StringOrNumber;
}

type UserWithRole = User & Role;


let user1: UserWithRole = {
    name: 'Anna',
    lastname: 'Stefanova',
    age: 38,
    skills: ['Dev', 'Testing'],
    id: 1
}

console.log(user1);

interface Admin {
    name: string;
    age: number;
}

interface RoleAdmin {
    id: number;
}

interface AdminWithRoleAdmin extends Admin, RoleAdmin {
    skills: string[]
}

let admin: AdminWithRoleAdmin = {
    name: 'Федя',
    age: 25,
    id: 3,
    skills: ['1', '2']
}

interface UserDic {
    [index: number]: User;
}

type UserDic2 = Record<number, User>

let usersList: UserDic2 = {
    1: user1,
}

let usersList2: UserDic = {
    1: user1
}

type AdminDic  = Record<number, Admin>

let adminsList = {
    2: admin
}