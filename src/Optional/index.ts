interface Men {
    name: string;
    age?: number;
    skills?: {
        frontend: string[];
        backend: string[];
    }
}

function testSkills(user: Men) {
    const frontendSkills = user.skills?.frontend;
    return frontendSkills ?? false;
}

function multiply(a: number, b?: number) {
    return b ? a * b : a * a;
}

// так как в интерфейсе skills и age - необязательные параметры, то при создании объекта по интерфейсу Men мы можем их не указывать
let men1 = {
    name: 'Peter'
}

function sum(a: number, b?: number) {
    return a + b!;
}